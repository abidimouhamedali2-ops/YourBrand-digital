'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import SafeImage from '@/components/ui/SafeImage'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'
import { Calendar, ArrowRight, Search, Tag } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

// In a real app, this would come from the database
const blogPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14',
    excerpt:
      'Learn how to build modern web applications with Next.js 14, featuring the new App Router and server components.',
    author: 'John Doe',
    publishedAt: new Date('2024-01-15'),
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80&auto=format',
    tags: ['Next.js', 'React', 'Web Development', 'Tutorial'],
  },
  {
    slug: 'best-practices-for-web-performance',
    title: 'Best Practices for Web Performance',
    excerpt:
      'Discover essential techniques to optimize your website for speed and deliver exceptional user experiences.',
    author: 'Jane Smith',
    publishedAt: new Date('2024-01-10'),
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80&auto=format',
    tags: ['Performance', 'Optimization', 'Web Development', 'Best Practices'],
  },
  {
    slug: 'the-future-of-web-development',
    title: 'The Future of Web Development',
    excerpt:
      'Explore emerging trends and technologies that are shaping the future of web development and digital experiences.',
    author: 'Mike Johnson',
    publishedAt: new Date('2024-01-05'),
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80&auto=format',
    tags: ['Future', 'Technology', 'Trends', 'Web Development'],
  },
]

// Extract all unique tags
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Filter posts based on search and tag
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesTag = selectedTag === null || post.tags.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [searchQuery, selectedTag])

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-text-primary mb-6">Our Blog</h1>
          <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and news from our team. Learn about
            technology trends, best practices, and industry updates.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-tertiary" />
            <Input
              type="text"
              placeholder="Search articles by title, content, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 w-full"
            />
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === null
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface text-text-secondary hover:bg-surface/80'
              }`}
            >
              All Posts
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedTag === tag
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface text-text-secondary hover:bg-surface/80'
                }`}
              >
                <Tag className="h-3 w-3" />
                {tag}
              </button>
            ))}
          </div>

          {/* Results Count */}
          {filteredPosts.length !== blogPosts.length && (
            <div className="text-center text-body-sm text-text-secondary">
              Showing {filteredPosts.length} of {blogPosts.length} posts
            </div>
          )}
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.slug} hover className="flex flex-col">
                <div className="relative h-48 w-full rounded-t-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <SafeImage
                    src={post.image}
                    alt={`${post.title} - ${post.excerpt}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    fallbackClassName="bg-gradient-to-br from-primary/20 to-secondary/20"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-body-sm text-text-secondary mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" asChild className="mt-auto">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="h-16 w-16 mx-auto text-text-tertiary mb-4" />
            <h3 className="text-h3 font-bold text-text-primary mb-2">No posts found</h3>
            <p className="text-body text-text-secondary mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button variant="outline" onClick={() => {
              setSearchQuery('')
              setSelectedTag(null)
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
