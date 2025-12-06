'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-h2 font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-body-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied clients who have already taken their business to the next
            level. Get started today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

