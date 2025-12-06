import { z } from 'zod'

// Contact Form Types
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes')
    .trim(),
  company: z
    .string()
    .max(200, 'Company name must be less than 200 characters')
    .optional()
    .or(z.literal('')),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  subject: z
    .enum(['project-inquiry', 'partnership', 'technical-support', 'other'], {
      errorMap: () => ({ message: 'Please select a subject' }),
    })
    .optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters')
    .trim(),
  budgetRange: z
    .enum(['under-10k', '10k-50k', '50k-100k', '100k-500k', '500k-plus', 'not-specified'], {
      errorMap: () => ({ message: 'Please select a budget range' }),
    })
    .optional(),
  preferredContact: z
    .enum(['call', 'email', 'meeting'], {
      errorMap: () => ({ message: 'Please select a preferred contact method' }),
    })
    .optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and privacy policy',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter Form Types
export const newsletterFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>

// Service Types
export interface Service {
  id: string
  slug: string
  title: string
  description: string
  content: string
  image?: string | null
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

// Blog Post Types
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image?: string | null
  author: string
  published: boolean
  publishedAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

// Navigation Types
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating?: number
}

// Feature Types
export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

