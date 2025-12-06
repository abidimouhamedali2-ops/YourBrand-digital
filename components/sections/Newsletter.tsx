'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import NewsletterForm from '@/components/forms/NewsletterForm'

export default function Newsletter() {
  return (
    <section className="py-16 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-h2 font-bold text-text-primary mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Get the latest insights, tips, and exclusive offers delivered straight to your inbox.
            No spam, unsubscribe anytime.
          </p>
          <NewsletterForm />
        </motion.div>
      </div>
    </section>
  )
}

