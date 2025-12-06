import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: {
        // Only return published services if you add a published field
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(services, { status: 200 })
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching services.' },
      { status: 500 }
    )
  }
}

