'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterFormSchema, type NewsletterFormData } from '@/types'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { CheckCircle, AlertCircle, Mail, Loader2 } from 'lucide-react'

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
    mode: 'onBlur', // Validate on blur for better UX
  })

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Successfully subscribed! Check your email for confirmation.')
        reset()
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-tertiary" />
            <Input
              type="email"
              {...register('email')}
              error={errors.email?.message}
              placeholder="Enter your email address"
              required
              className="mb-0 pl-10"
              aria-label="Email address"
              autoComplete="email"
            />
          </div>
        </div>
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          className="whitespace-nowrap"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            'Subscribe'
          )}
        </Button>
      </div>

      {submitStatus === 'success' && (
        <div className="flex items-center justify-center space-x-2 mt-4 text-success text-sm">
          <CheckCircle className="h-4 w-4" />
          <p>{submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center justify-center space-x-2 mt-4 text-error text-sm">
          <AlertCircle className="h-4 w-4" />
          <p>{submitMessage}</p>
        </div>
      )}
      
      <p className="text-xs text-text-tertiary text-center mt-4">
        We respect your privacy. Unsubscribe at any time. See our{' '}
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}

