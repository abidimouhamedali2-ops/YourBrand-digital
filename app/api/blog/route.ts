import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      orderBy: {
        publishedAt: 'desc',
      },
      take: 50,
    })

    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching blog posts.' },
      { status: 500 }
    )
  }
}

