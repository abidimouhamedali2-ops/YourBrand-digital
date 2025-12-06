'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User } from 'lucide-react'
import SafeImage from '@/components/ui/SafeImage'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { formatDate } from '@/lib/utils'

const blogPosts = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with Next.js 14',
        excerpt:
            'Learn how to build modern web applications with Next.js 14, featuring the new App Router and server components.',
        author: 'John Doe',
        publishedAt: new Date('2024-01-15'),
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80&auto=format',
        tags: ['Next.js', 'React'],
    },
    {
        slug: 'best-practices-for-web-performance',
        title: 'Best Practices for Web Performance',
        excerpt:
            'Discover essential techniques to optimize your website for speed and deliver exceptional user experiences.',
        author: 'Jane Smith',
        publishedAt: new Date('2024-01-10'),
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80&auto=format',
        tags: ['Performance', 'Optimization'],
    },
    {
        slug: 'the-future-of-web-development',
        title: 'The Future of Web Development',
        excerpt:
            'Explore emerging trends and technologies that are shaping the future of web development and digital experiences.',
        author: 'Mike Johnson',
        publishedAt: new Date('2024-01-05'),
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80&auto=format',
        tags: ['Future', 'Trends'],
    },
]

export default function BlogSection() {
    return (
        <section className="py-20 bg-surface dark:bg-surface-dark">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-h2 font-bold text-text-primary mb-4">
                            Latest Insights
                        </h2>
                        <p className="text-body-lg text-text-secondary">
                            Stay updated with the latest trends, tips, and news from our team.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 md:mt-0"
                    >
                        <Button variant="outline" asChild>
                            <Link href="/blog">
                                View All Posts
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card hover className="h-full flex flex-col overflow-hidden">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <SafeImage
                                        src={post.image}
                                        alt={`${post.title} - ${post.excerpt}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                        fallbackClassName="bg-gradient-to-br from-primary/20 to-secondary/20"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm text-text-primary rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center text-sm text-text-secondary mb-3 space-x-4">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {formatDate(post.publishedAt)}
                                        </div>
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-1" />
                                            {post.author}
                                        </div>
                                    </div>
                                    <CardTitle className="line-clamp-2 mb-2">
                                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <CardDescription className="line-clamp-3 mb-6">
                                        {post.excerpt}
                                    </CardDescription>
                                    <div className="mt-auto">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center group"
                                        >
                                            Read More
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
