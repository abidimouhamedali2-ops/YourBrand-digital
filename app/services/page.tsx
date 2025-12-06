import type { Metadata } from 'next'
import Link from 'next/link'
import SafeImage from '@/components/ui/SafeImage'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Our Services | YourBrand - Professional Technology Solutions',
  description:
    'Explore our comprehensive range of services designed to help your business thrive. From web development and mobile apps to cloud solutions and digital strategy, we have you covered.',
  keywords: [
    'web development services',
    'mobile app development',
    'cloud solutions',
    'digital strategy',
    'UI/UX design',
    'technology consulting',
  ],
  openGraph: {
    title: 'Our Services | YourBrand',
    description:
      'Explore our comprehensive range of services designed to help your business thrive. From web development to digital strategy, we have you covered.',
  },
}

// In a real app, this would come from the database
// Service images from Unsplash - optimized URLs with proper dimensions
const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description:
      'Custom web applications built with modern technologies. Responsive, fast, and scalable solutions tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80&auto=format',
    // Alternative to Pixabay: code-html-numérique-codage-1076536
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Applications',
    description:
      'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android devices.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80&auto=format',
    // Original ID: pKRNxEguRgM
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration services to help you leverage the power of modern cloud platforms.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80&auto=format',
    // Original ID: c_dSqY9yxs0
  },
  {
    slug: 'digital-strategy',
    title: 'Digital Strategy',
    description:
      'Comprehensive digital transformation strategies to help you navigate the digital landscape and achieve your business goals.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80&auto=format',
    // Original ID: 9lpSbMgYm0Q
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive user interfaces designed with user experience at the forefront. We create designs that convert.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&q=80&auto=format',
    // Original ID: vhZ8K5Np9mk
  },
  {
    slug: 'consulting',
    title: 'Technology Consulting',
    description:
      'Expert guidance on technology decisions, architecture, and best practices to help you make informed choices.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80&auto=format',
    // Original ID: 2gNKnILqUIU
  },
]

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-text-primary mb-6">Our Services</h1>
          <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
            We offer a comprehensive range of services to help your business succeed in the
            digital age. Each solution is tailored to meet your unique needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.slug} hover className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <SafeImage
                  src={service.image}
                  alt={`${service.title} service - Professional ${service.title.toLowerCase()} solutions and expertise`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-t-xl"
                  fallbackClassName="bg-gradient-to-br from-primary/20 to-secondary/20"
                  placeholder={
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2 opacity-50">📷</div>
                        <p className="text-xs text-text-tertiary">Loading image...</p>
                      </div>
                    </div>
                  }
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="mb-4">{service.description}</CardDescription>
                <Button variant="ghost" size="sm" asChild className="mt-auto">
                  <Link href={`/services/${service.slug}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-h2 font-bold text-text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our services.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

