'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Shield, Globe, TrendingUp, Users, Code } from 'lucide-react'
import SafeImage from '@/components/ui/SafeImage'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Optimized for performance with cutting-edge technology to deliver blazing-fast experiences.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80&auto=format',
    link: '/services/web-development',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description:
      'Enterprise-grade security measures to protect your data and ensure maximum uptime.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&q=80&auto=format',
    link: '/services/cloud-solutions',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description:
      'Built to scale globally with CDN integration and multi-region deployment capabilities.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80&auto=format',
    link: '/services/cloud-solutions',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven',
    description:
      'Advanced analytics and insights to help you make informed decisions and grow your business.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80&auto=format',
    link: '/services/digital-strategy',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Seamless collaboration tools that keep your team connected and productive anywhere.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80&auto=format',
    link: '/services/consulting',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description:
      'Clean APIs, comprehensive documentation, and extensive customization options for developers.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&q=80&auto=format',
    link: '/services/web-development',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-text-primary mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Powerful features designed to help your business grow, scale, and thrive in the digital
            age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className="h-full overflow-hidden flex flex-col">
                  <div className="relative h-40 w-full overflow-hidden">
                    <SafeImage
                      src={feature.image}
                      alt={`${feature.title} - ${feature.description}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      fallbackClassName="bg-gradient-to-br from-primary/20 to-secondary/20"
                    />
                  </div>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="mb-4">{feature.description}</CardDescription>
                    <div className="mt-auto pt-4">
                      <Link
                        href={feature.link}
                        className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

