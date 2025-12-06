import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SafeImage from '@/components/ui/SafeImage'
import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// Blog post data with comprehensive content
const blogPosts: Record<string, any> = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js 14',
    excerpt:
      'Learn how to build modern web applications with Next.js 14, featuring the new App Router and server components.',
    author: 'John Doe',
    authorRole: 'Senior Developer',
    publishedAt: new Date('2024-01-15'),
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80&auto=format',
    content: `
      <p class="text-body-lg text-text-secondary mb-6">Next.js 14 introduces exciting new features that make building modern web applications easier and more efficient than ever before. In this comprehensive guide, we'll explore the key improvements and how to get started with the latest version.</p>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">The App Router</h2>
      <p class="text-body text-text-secondary mb-4">The new App Router provides a more intuitive way to structure your Next.js applications. With support for layouts, loading states, and error boundaries, it's easier than ever to build robust applications that scale.</p>
      <p class="text-body text-text-secondary mb-6">The App Router uses React Server Components by default, allowing you to fetch data directly in your components without additional API routes. This reduces the amount of JavaScript sent to the client and improves performance significantly.</p>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Server Components</h2>
      <p class="text-body text-text-secondary mb-4">Server Components allow you to build faster applications by moving data fetching and rendering to the server. This reduces the amount of JavaScript sent to the client and improves performance.</p>
      <p class="text-body text-text-secondary mb-6">With Server Components, you can directly access databases, file systems, and other server-side resources without creating API endpoints. This simplifies your codebase and improves security by keeping sensitive operations on the server.</p>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Key Features</h2>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span><strong>Improved Performance:</strong> Faster page loads and better Core Web Vitals scores</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span><strong>Better Developer Experience:</strong> Enhanced TypeScript support and improved error messages</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span><strong>Streaming:</strong> Progressive rendering for better perceived performance</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span><strong>Image Optimization:</strong> Built-in image optimization with next/image</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span><strong>Font Optimization:</strong> Automatic font optimization for better performance</span></li>
      </ul>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Getting Started</h2>
      <p class="text-body text-text-secondary mb-4">To get started with Next.js 14, simply create a new project using the create-next-app command with the latest version:</p>
      <pre class="bg-surface p-4 rounded-lg mb-4 overflow-x-auto"><code>npx create-next-app@latest my-app</code></pre>
      <p class="text-body text-text-secondary mb-6">This will create a new Next.js project with all the latest features and best practices configured out of the box.</p>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Best Practices</h2>
      <p class="text-body text-text-secondary mb-4">When building with Next.js 14, keep these best practices in mind:</p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Use Server Components by default and only add "use client" when necessary</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Leverage the App Router's file-based routing system</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Take advantage of built-in optimizations for images and fonts</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Use loading.tsx and error.tsx for better UX</span></li>
      </ul>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Conclusion</h2>
      <p class="text-body text-text-secondary mb-4">Next.js 14 represents a significant step forward in React framework development. With its focus on performance, developer experience, and modern web standards, it's an excellent choice for building your next web application.</p>
      <p class="text-body text-text-secondary">Whether you're building a simple blog or a complex enterprise application, Next.js 14 provides the tools and features you need to succeed. Start exploring today and see how it can transform your development workflow.</p>
    `,
    tags: ['Next.js', 'React', 'Web Development', 'Tutorial'],
  },
  'best-practices-for-web-performance': {
    title: 'Best Practices for Web Performance',
    excerpt:
      'Discover essential techniques to optimize your website for speed and deliver exceptional user experiences.',
    author: 'Jane Smith',
    authorRole: 'Performance Engineer',
    publishedAt: new Date('2024-01-10'),
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&q=80&auto=format',
    content: `
      <p class="text-body-lg text-text-secondary mb-6">Web performance is crucial for user experience, SEO, and business success. In this comprehensive guide, we'll explore the best practices and techniques to optimize your website for speed and deliver exceptional user experiences.</p>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Why Performance Matters</h2>
      <p class="text-body text-text-secondary mb-4">Studies show that users expect websites to load in 2 seconds or less. Every additional second of load time can result in a 7% reduction in conversions. Performance directly impacts:</p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span><strong>User Experience:</strong> Faster sites keep users engaged and reduce bounce rates</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span><strong>SEO Rankings:</strong> Search engines favor fast-loading websites</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span><strong>Conversion Rates:</strong> Faster sites convert better</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span><strong>Mobile Experience:</strong> Critical for mobile users on slower connections</span></li>
      </ul>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Core Web Vitals</h2>
      <p class="text-body text-text-secondary mb-4">Google's Core Web Vitals measure real-world user experience. Focus on these three metrics:</p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span><strong>Largest Contentful Paint (LCP):</strong> Should be under 2.5 seconds</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span><strong>First Input Delay (FID):</strong> Should be under 100 milliseconds</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span><strong>Cumulative Layout Shift (CLS):</strong> Should be under 0.1</span></li>
      </ul>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Optimization Techniques</h2>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">1. Image Optimization</h3>
      <p class="text-body text-text-secondary mb-4">Images often account for the largest portion of page weight. Optimize by:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Using modern formats like WebP or AVIF</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Implementing lazy loading</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Responsive images with srcset</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Compressing images without losing quality</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">2. Code Splitting</h3>
      <p class="text-body text-text-secondary mb-4">Split your JavaScript bundles to load only what's needed:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Use dynamic imports for route-based splitting</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Lazy load components that aren't immediately visible</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Remove unused code with tree shaking</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">3. Caching Strategies</h3>
      <p class="text-body text-text-secondary mb-4">Implement effective caching to reduce server load and improve speed:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Browser caching for static assets</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>CDN caching for global distribution</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Service workers for offline capabilities</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">4. Minimize Render-Blocking Resources</h3>
      <p class="text-body text-text-secondary mb-4">Reduce render-blocking CSS and JavaScript:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Inline critical CSS</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Defer non-critical JavaScript</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Use async or defer attributes</span></li>
      </ul>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Monitoring and Testing</h2>
      <p class="text-body text-text-secondary mb-4">Regularly monitor your site's performance using tools like:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Google PageSpeed Insights</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Lighthouse in Chrome DevTools</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>WebPageTest for detailed analysis</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Real User Monitoring (RUM) tools</span></li>
      </ul>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Conclusion</h2>
      <p class="text-body text-text-secondary mb-4">Web performance optimization is an ongoing process. By implementing these best practices, you can significantly improve your website's speed, user experience, and business results.</p>
      <p class="text-body text-text-secondary">Remember to measure, optimize, and iterate. Performance is not a one-time task but a continuous effort to provide the best possible experience for your users.</p>
    `,
    tags: ['Performance', 'Optimization', 'Web Development', 'Best Practices'],
  },
  'the-future-of-web-development': {
    title: 'The Future of Web Development',
    excerpt:
      'Explore emerging trends and technologies that are shaping the future of web development and digital experiences.',
    author: 'Mike Johnson',
    authorRole: 'Tech Lead',
    publishedAt: new Date('2024-01-05'),
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=80&auto=format',
    content: `
      <p class="text-body-lg text-text-secondary mb-6">The web development landscape is constantly evolving. New technologies, frameworks, and methodologies emerge regularly, shaping how we build and experience the web. Let's explore the trends and innovations that are defining the future of web development.</p>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Emerging Technologies</h2>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">AI and Machine Learning Integration</h3>
      <p class="text-body text-text-secondary mb-4">Artificial Intelligence is becoming increasingly integrated into web applications. From chatbots and recommendation systems to automated testing and code generation, AI is transforming how we build and interact with web applications.</p>
      <p class="text-body text-text-secondary mb-6">Tools like GitHub Copilot and ChatGPT are already changing how developers write code, while AI-powered analytics provide deeper insights into user behavior and application performance.</p>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">WebAssembly (WASM)</h3>
      <p class="text-body text-text-secondary mb-4">WebAssembly enables running high-performance code in browsers, opening up new possibilities for web applications. We're seeing WASM used for:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Complex computations and data processing</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Game engines and graphics rendering</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Video and audio processing</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Running existing codebases in the browser</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">Edge Computing</h3>
      <p class="text-body text-text-secondary mb-4">Edge computing brings computation closer to users, reducing latency and improving performance. With edge functions and edge databases, we can build applications that respond faster and work better globally.</p>
      <p class="text-body text-text-secondary mb-6">Platforms like Vercel Edge Functions, Cloudflare Workers, and AWS Lambda@Edge are making edge computing more accessible to developers.</p>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Framework Evolution</h2>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">React Server Components</h3>
      <p class="text-body text-text-secondary mb-4">Server Components represent a paradigm shift in React development. By moving rendering to the server, we can build faster, more efficient applications with less JavaScript sent to the client.</p>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">Full-Stack Frameworks</h3>
      <p class="text-body text-text-secondary mb-4">Frameworks like Next.js, Remix, and SvelteKit are blurring the lines between frontend and backend, providing integrated solutions for building full-stack applications with better developer experience.</p>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Development Experience</h2>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">Better Tooling</h3>
      <p class="text-body text-text-secondary mb-4">Development tools continue to improve:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Faster build times with tools like Turborepo and Nx</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Better TypeScript support across frameworks</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Improved debugging and profiling tools</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Enhanced IDE support and autocomplete</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">Low-Code and No-Code</h3>
      <p class="text-body text-text-secondary mb-4">While traditional coding isn't going away, low-code and no-code platforms are becoming more powerful, enabling non-developers to build sophisticated web applications.</p>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">User Experience Trends</h2>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">Progressive Web Apps (PWAs)</h3>
      <p class="text-body text-text-secondary mb-4">PWAs continue to evolve, providing app-like experiences in the browser with offline capabilities, push notifications, and home screen installation.</p>
      
      <h3 class="text-h3 font-bold text-text-primary mb-3 mt-6">Accessibility First</h3>
      <p class="text-body text-text-secondary mb-4">Accessibility is no longer an afterthought. Modern frameworks and tools are building accessibility into their core, making it easier to create inclusive web experiences.</p>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">What This Means for Developers</h2>
      <p class="text-body text-text-secondary mb-4">As the web development landscape evolves, developers need to:</p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Stay curious and continuously learn new technologies</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Focus on fundamentals that remain constant</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Understand user needs and business goals</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">•</span> <span>Embrace change and adapt to new paradigms</span></li>
      </ul>
      
      <h2 class="text-h2 font-bold text-text-primary mb-4 mt-8">Conclusion</h2>
      <p class="text-body text-text-secondary mb-4">The future of web development is exciting and full of possibilities. While technologies will continue to evolve, the core principles of building great user experiences remain constant.</p>
      <p class="text-body text-text-secondary">By staying informed about emerging trends, focusing on user needs, and maintaining a strong foundation in web fundamentals, developers can navigate the changing landscape and build the next generation of web applications.</p>
    `,
    tags: ['Future', 'Technology', 'Trends', 'Web Development'],
  },
}

async function getBlogPost(slug: string) {
  return blogPosts[slug] || null
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | YourBrand Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt.toISOString(),
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const post = await getBlogPost(slug)

    if (!post) {
      notFound()
    }

    return (
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-text-secondary hover:text-primary mb-8 transition-colors duration-200"
            aria-label="Back to blog"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 shadow-xl">
              <SafeImage
                src={post.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80&auto=format'}
                alt={`${post.title} - ${post.excerpt}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
                placeholder={
                  <div className="text-center text-text-primary">
                    <h1 className="text-h1 font-bold mb-4">{post.title}</h1>
                  </div>
                }
              />
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-body-sm text-text-secondary mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
                {post.authorRole && <span className="ml-2 text-text-tertiary">• {post.authorRole}</span>}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <p className="text-body-lg text-text-secondary">{post.excerpt}</p>

            {/* Tags */}
            {post.tags && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <Card>
            <CardContent className="p-8">
              <article
                className="prose prose-lg max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-ul:text-text-secondary prose-li:text-text-secondary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-h4 font-bold text-text-primary mb-2">Enjoyed this article?</h3>
                <p className="text-body text-text-secondary">Share it with others</p>
              </div>
              <Button variant="outline" size="md" asChild>
                <Link href={`/blog`}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Article
                </Link>
              </Button>
            </div>
          </div>

          {/* Related Posts CTA */}
          <div className="mt-12 text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-h3 font-bold text-text-primary mb-4">Want to Read More?</h3>
            <p className="text-body-lg text-text-secondary mb-6">
              Explore more articles and insights on our blog.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading blog post:', error)
    notFound()
  }
}
