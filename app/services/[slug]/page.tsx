import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SafeImage from '@/components/ui/SafeImage'
import {
  ArrowLeft,
  CheckCircle2,
  Code,
  Smartphone,
  Cloud,
  Target,
  Palette,
  Briefcase,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

// Service image URLs mapping - optimized for detail pages (larger size)
const serviceImages: Record<string, string> = {
  'web-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80&auto=format',
  'mobile-apps': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&q=80&auto=format',
  'cloud-solutions': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=80&auto=format',
  'digital-strategy': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80&auto=format',
  'ui-ux-design': 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=800&fit=crop&q=80&auto=format',
  'consulting': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80&auto=format',
}

function getServiceImageUrl(slug: string): string {
  return serviceImages[slug] || `/images/services/${slug}.jpg`
}

// Service data with comprehensive content
const services: Record<string, any> = {
  'web-development': {
    title: 'Web Development',
    description:
      'Custom web applications built with modern technologies. Responsive, fast, and scalable solutions tailored to your needs.',
    icon: Code,
    content: `
      <p class="text-body-lg text-text-secondary mb-6">We specialize in building custom web applications that are not just functional, but truly exceptional. Our team leverages the latest technologies and best practices to deliver solutions that drive results and exceed expectations.</p>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">What We Offer</h3>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Custom web application development from concept to deployment</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Responsive design optimized for all devices and screen sizes</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Performance optimization for lightning-fast load times</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>SEO-friendly architecture to maximize your online visibility</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Ongoing maintenance, updates, and technical support</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>E-commerce solutions with secure payment integration</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Technologies We Use</h3>
      <p class="text-body text-text-secondary mb-4">We work with modern frameworks and tools including React, Next.js, Vue.js, Node.js, TypeScript, and more. Our solutions are built to scale, perform, and adapt to your growing business needs.</p>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Our Process</h3>
      <p class="text-body text-text-secondary">We follow an agile development methodology, ensuring regular communication, iterative improvements, and timely delivery. From initial consultation to final deployment, we work closely with you every step of the way.</p>
    `,
    features: [
      'Custom Development',
      'Responsive Design',
      'Performance Optimization',
      'SEO Optimization',
      'Security Best Practices',
      '24/7 Support',
    ],
  },
  'mobile-apps': {
    title: 'Mobile Applications',
    description:
      'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android devices.',
    icon: Smartphone,
    content: `
      <p class="text-body-lg text-text-secondary mb-6">In today's mobile-first world, having a powerful mobile application is essential for business success. We create native and cross-platform mobile apps that deliver exceptional user experiences and drive engagement.</p>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Our Mobile Solutions</h3>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Native iOS and Android app development</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Cross-platform solutions using React Native and Flutter</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Intuitive UI/UX design focused on user experience</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>App Store optimization and deployment assistance</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Backend integration and API development</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Ongoing maintenance and feature updates</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Why Choose Our Mobile Development</h3>
      <p class="text-body text-text-secondary mb-4">Our mobile apps are built with performance, security, and scalability in mind. We ensure your app works seamlessly across all devices and provides a smooth, engaging user experience that keeps users coming back.</p>
    `,
    features: [
      'Native Development',
      'Cross-Platform',
      'App Store Optimization',
      'Push Notifications',
      'Offline Capabilities',
      'Analytics Integration',
    ],
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration services to help you leverage the power of modern cloud platforms.',
    icon: Cloud,
    content: `
      <p class="text-body-lg text-text-secondary mb-6">Transform your business with scalable cloud infrastructure that grows with you. We help you migrate to the cloud, optimize your existing setup, and leverage the full power of modern cloud platforms.</p>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Cloud Services We Provide</h3>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Cloud migration strategy and execution</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>AWS, Azure, and Google Cloud Platform expertise</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Infrastructure as Code (IaC) implementation</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>DevOps and CI/CD pipeline setup</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Cloud security and compliance</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Cost optimization and monitoring</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Benefits of Cloud Solutions</h3>
      <p class="text-body text-text-secondary mb-4">Cloud infrastructure provides scalability, reliability, and cost-efficiency. We help you reduce IT overhead, improve performance, and ensure your systems can handle growth without compromising on security or availability.</p>
    `,
    features: [
      'Cloud Migration',
      'Multi-Cloud Strategy',
      'DevOps & CI/CD',
      'Security & Compliance',
      'Cost Optimization',
      '24/7 Monitoring',
    ],
  },
  'digital-strategy': {
    title: 'Digital Strategy',
    description:
      'Comprehensive digital transformation strategies to help you navigate the digital landscape and achieve your business goals.',
    icon: Target,
    content: `
      <p class="text-body-lg text-text-secondary mb-6">A well-defined digital strategy is the foundation of successful digital transformation. We help you navigate the complex digital landscape and create a roadmap that aligns technology with your business objectives.</p>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Strategic Services</h3>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Digital transformation roadmap development</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Technology assessment and recommendations</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Competitive analysis and market research</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Digital marketing strategy and planning</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Customer journey mapping and optimization</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>ROI measurement and analytics setup</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Our Approach</h3>
      <p class="text-body text-text-secondary mb-4">We start by understanding your business, your goals, and your challenges. Then we develop a comprehensive strategy that leverages technology to drive growth, improve efficiency, and create competitive advantages.</p>
    `,
    features: [
      'Strategy Development',
      'Technology Assessment',
      'Market Analysis',
      'Digital Roadmap',
      'Performance Metrics',
      'Ongoing Consultation',
    ],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive user interfaces designed with user experience at the forefront. We create designs that convert.',
    icon: Palette,
    content: `
      <p class="text-body-lg text-text-secondary mb-6">Great design is more than just aesthetics—it's about creating experiences that users love and that drive business results. Our design team combines creativity with data-driven insights to deliver interfaces that are both beautiful and functional.</p>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Design Services</h3>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>User research and persona development</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Wireframing and prototyping</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Visual design and brand identity</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Responsive design for all devices</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Usability testing and optimization</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Design system creation and maintenance</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Design Philosophy</h3>
      <p class="text-body text-text-secondary mb-4">We believe in user-centered design that prioritizes usability and accessibility. Every design decision is backed by research, testing, and a deep understanding of your users' needs and behaviors.</p>
    `,
    features: [
      'User Research',
      'Wireframing',
      'Visual Design',
      'Prototyping',
      'Usability Testing',
      'Design Systems',
    ],
  },
  'consulting': {
    title: 'Technology Consulting',
    description:
      'Expert guidance on technology decisions, architecture, and best practices to help you make informed choices.',
    icon: Briefcase,
    content: `
      <p class="text-body-lg text-text-secondary mb-6">Navigate complex technology decisions with confidence. Our consulting services provide expert guidance to help you choose the right technologies, architectures, and strategies for your business needs.</p>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Consulting Areas</h3>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Technology stack selection and evaluation</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>System architecture design and review</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Code review and quality assessment</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Security audits and recommendations</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Performance optimization strategies</span></li>
        <li class="flex items-start"><span class="text-primary mr-2">✓</span> <span>Team training and knowledge transfer</span></li>
      </ul>
      
      <h3 class="text-h3 font-bold text-text-primary mb-4 mt-8">Why Our Consulting</h3>
      <p class="text-body text-text-secondary mb-4">With years of experience across various industries and technologies, we provide unbiased, practical advice that helps you make informed decisions and avoid costly mistakes. We're here to guide you toward the best solutions for your unique situation.</p>
    `,
    features: [
      'Technology Assessment',
      'Architecture Review',
      'Security Audits',
      'Performance Analysis',
      'Best Practices',
      'Team Training',
    ],
  },
}

async function getService(slug: string) {
  return services[slug] || null
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} | YourBrand - Professional Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} | YourBrand`,
      description: service.description,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const service = await getService(slug)

    if (!service) {
      notFound()
    }

    const Icon = service.icon

    return (
      <div className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center text-text-secondary hover:text-primary mb-8 transition-colors duration-200"
            aria-label="Back to services"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 shadow-xl">
              <SafeImage
                src={getServiceImageUrl(slug)}
                alt={`${service.title} - Professional ${service.title.toLowerCase()} services and solutions`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
                placeholder={
                  <div className="text-center">
                    <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-h1 font-bold text-text-primary">{service.title}</h1>
                  </div>
                }
              />
            </div>
            <p className="text-body-lg text-text-secondary max-w-3xl">{service.description}</p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: service.content }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Features Sidebar */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-h4 font-bold text-text-primary mb-6">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature: string) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-body text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-h2 font-bold text-text-primary mb-4">
              Interested in {service.title}?
            </h2>
            <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our {service.title.toLowerCase()} services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading service:', error)
    notFound()
  }
}
