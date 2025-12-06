'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SafeImage from '@/components/ui/SafeImage'
import { Card, CardContent } from '@/components/ui/Card'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content:
      'Working with this team has been transformative. Their expertise and dedication helped us scale our business faster than we ever imagined.',
    rating: 5,
    avatar: 'SJ',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80&auto=format',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'InnovateLabs',
    content:
      'The quality of work and attention to detail is exceptional. They delivered exactly what we needed, on time and within budget.',
    rating: 5,
    avatar: 'MC',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80&auto=format',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthCo',
    content:
      'Outstanding service from start to finish. The team understood our vision and brought it to life beautifully. Highly recommended!',
    rating: 5,
    avatar: 'ER',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80&auto=format',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with
            us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-body text-text-primary mb-6">{testimonial.content}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-warning fill-warning"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <SafeImage
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.role} at ${testimonial.company}`}
                        fill
                        sizes="48px"
                        className="object-cover rounded-full"
                        placeholder={
                          <span className="text-primary font-semibold text-sm">{testimonial.avatar}</span>
                        }
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">{testimonial.name}</div>
                      <div className="text-body-sm text-text-secondary">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
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

