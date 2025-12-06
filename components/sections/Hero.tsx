'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import SafeImage from '@/components/ui/SafeImage'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>Innovation Meets Excellence</span>
            </motion.div>

            <h1 className="text-display font-bold text-text-primary mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Modern Solutions
              </span>
            </h1>

            <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
              We deliver cutting-edge technology solutions that drive growth, enhance efficiency,
              and elevate your business to new heights. Experience the future of digital
              transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-border"
            >
              <div>
                <div className="text-3xl font-bold text-text-primary">500+</div>
                <div className="text-body-sm text-text-secondary mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-primary">1000+</div>
                <div className="text-body-sm text-text-secondary mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-primary">50+</div>
                <div className="text-body-sm text-text-secondary mt-1">Team Members</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-xl">
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10" />
              
              {/* Main image container */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-primary/90 to-secondary">
                <SafeImage
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop&q=80&auto=format"
                  alt="Modern business solutions and technology innovation - Professional team collaborating on cutting-edge technology projects in a modern workspace"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  placeholder={
                    <div className="text-center p-8 text-white/90">
                      <div className="text-7xl mb-6 opacity-90">🚀</div>
                      <p className="text-xl font-semibold mb-2">Innovation in Action</p>
                      <p className="text-sm opacity-80">Loading...</p>
                    </div>
                  }
                />
              </div>
              
              {/* Trust badges floating */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 left-0 right-0 flex justify-center"
              >
                <div className="bg-background rounded-full px-6 py-3 shadow-lg border border-border flex items-center gap-4">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-body-sm font-medium text-text-primary">Trusted by 500+ Companies</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

