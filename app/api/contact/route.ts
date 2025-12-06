import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { checkRateLimit } from '@/lib/validations'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.ip || 'unknown'
    if (!checkRateLimit(ip, 5, 60000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validate input
    const validationResult = contactFormSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = validationResult.data

    // Save to database
    try {
      await prisma.contactSubmission.create({
        data: {
          name,
          email,
          subject: subject || null,
          message,
        },
      })
    } catch (dbError) {
      // Log error but don't expose database details
      console.error('Database error:', dbError)
      // Continue - we can still send email notification
    }

    // TODO: Send email notification
    // You can integrate with services like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    return NextResponse.json(
      {
        message: 'Thank you for your message. We will get back to you soon!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve submissions (admin only)
export async function GET(request: NextRequest) {
  // In production, add authentication check here
  // const session = await getServerSession()
  // if (!session || session.user.role !== 'ADMIN') {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  // }

  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    })

    return NextResponse.json(submissions, { status: 200 })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching submissions.' },
      { status: 500 }
    )
  }
}

