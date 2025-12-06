import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import Portfolio from '@/components/sections/Portfolio'
import CTA from '@/components/sections/CTA'
import Newsletter from '@/components/sections/Newsletter'

import BlogSection from '@/components/sections/BlogSection'

export const metadata: Metadata = {
  title: 'YourBrand - Modern Technology Solutions for Your Business',
  description:
    'Transform your business with cutting-edge technology solutions. We deliver innovative web development, mobile apps, cloud solutions, and digital strategy services that drive growth and enhance efficiency.',
  keywords: [
    'web development',
    'mobile applications',
    'cloud solutions',
    'digital strategy',
    'technology consulting',
    'UI/UX design',
  ],
  openGraph: {
    title: 'YourBrand - Modern Solutions for Your Business',
    description:
      'Transform your business with cutting-edge technology solutions. We deliver innovative services that drive growth and enhance efficiency.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourBrand - Modern Solutions for Your Business',
    description:
      'Transform your business with cutting-edge technology solutions. We deliver innovative services that drive growth and enhance efficiency.',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Portfolio />
      <Testimonials />
      <BlogSection />
      <CTA />
      <Newsletter />
    </>
  )
}

