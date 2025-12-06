'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/types'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Checkbox from '@/components/ui/Checkbox'
import Button from '@/components/ui/Button'
import Toast from '@/components/ui/Toast'
import { useToast } from '@/hooks/useToast'
import { Send, Loader2 } from 'lucide-react'

const subjectOptions = [
  { value: 'project-inquiry', label: 'Project Inquiry' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'technical-support', label: 'Technical Support' },
  { value: 'other', label: 'Other' },
]

const budgetOptions = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-50k', label: '$10,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: '100k-500k', label: '$100,000 - $500,000' },
  { value: '500k-plus', label: '$500,000+' },
  { value: 'not-specified', label: 'Prefer not to specify' },
]

const contactMethodOptions = [
  { value: 'call', label: 'Phone Call' },
  { value: 'email', label: 'Email' },
  { value: 'meeting', label: 'Schedule a Meeting' },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast, showToast, hideToast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    defaultValues: {
      agreeToTerms: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        showToast('Thank you! Your message has been sent successfully. We\'ll respond within 24 hours.', 'success')
        reset()
      } else {
        showToast(result.error || 'Something went wrong. Please try again.', 'error')
      }
    } catch (error) {
      showToast('Network error. Please check your connection and try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            {...register('name')}
            error={errors.name?.message}
            required
            placeholder="John Doe"
            autoComplete="name"
            aria-label="Full name"
          />
          <Input
            label="Company / Organization"
            {...register('company')}
            error={errors.company?.message}
            placeholder="Acme Inc."
            autoComplete="organization"
            aria-label="Company name"
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Email Address"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            required
            placeholder="john@example.com"
            autoComplete="email"
            aria-label="Email address"
          />
          <Input
            label="Phone Number"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="+1 (555) 123-4567"
            autoComplete="tel"
            aria-label="Phone number"
          />
        </div>

        {/* Subject and Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Subject"
            {...register('subject')}
            error={errors.subject?.message}
            options={subjectOptions}
            placeholder="Select a subject"
            aria-label="Inquiry subject"
          />
          <Select
            label="Budget Range (Optional)"
            {...register('budgetRange')}
            error={errors.budgetRange?.message}
            options={budgetOptions}
            placeholder="Select budget range"
            aria-label="Project budget range"
          />
        </div>

        {/* Preferred Contact Method */}
        <Select
          label="Preferred Contact Method"
          {...register('preferredContact')}
          error={errors.preferredContact?.message}
          options={contactMethodOptions}
          placeholder="How would you like us to reach you?"
          aria-label="Preferred contact method"
        />

        {/* Message */}
        <Textarea
          label="Message / Project Description"
          {...register('message')}
          error={errors.message?.message}
          required
          placeholder="Tell us about your project, goals, timeline, and any specific requirements. The more details you provide, the better we can assist you."
          rows={6}
          helperText={`${watch('message')?.length || 0} / 5000 characters`}
          aria-label="Project description or message"
        />

        {/* Terms Checkbox */}
        <Checkbox
          {...register('agreeToTerms')}
          error={errors.agreeToTerms?.message}
          required
          label={
            <>
              I agree to the{' '}
              <a href="/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </>
          }
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </>
          )}
        </Button>
      </form>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  )
}
