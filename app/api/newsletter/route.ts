import { NextRequest, NextResponse } from 'next/server'
import { newsletterSchema } from '@/lib/validations'
import { checkRateLimit } from '@/lib/validations'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.ip || 'unknown'
    if (!checkRateLimit(ip, 3, 60000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validate input
    const validationResult = newsletterSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const { email } = validationResult.data

    // Check if already subscribed
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    })

    if (existing) {
      if (existing.active) {
        return NextResponse.json(
          { message: 'You are already subscribed to our newsletter!' },
          { status: 200 }
        )
      } else {
        // Reactivate subscription
        await prisma.newsletterSubscriber.update({
          where: { email },
          data: { active: true },
        })
        return NextResponse.json(
          { message: 'Welcome back! Your subscription has been reactivated.' },
          { status: 200 }
        )
      }
    }

    // Create new subscription
    await prisma.newsletterSubscriber.create({
      data: {
        email,
        active: true,
      },
    })

    // TODO: Send welcome email
    // You can integrate with email services like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Mailchimp
    // - ConvertKit

    return NextResponse.json(
      {
        message: 'Successfully subscribed! Check your email for confirmation.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your subscription.' },
      { status: 500 }
    )
  }
}

// Unsubscribe endpoint
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const subscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    })

    if (!subscriber) {
      return NextResponse.json(
        { error: 'Email not found in our records' },
        { status: 404 }
      )
    }

    await prisma.newsletterSubscriber.update({
      where: { email },
      data: { active: false },
    })

    return NextResponse.json(
      { message: 'Successfully unsubscribed from newsletter.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unsubscribe error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your unsubscribe request.' },
      { status: 500 }
    )
  }
}

