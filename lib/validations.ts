import { z } from 'zod'

// Contact form validation schema with enhanced validation
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

// Newsletter subscription schema with enhanced validation
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim()
    .refine(
      (email) => !email.includes('+') || email.split('@')[0].includes('+'),
      'Invalid email format'
    ),
})

// Rate limiting helper (simple in-memory store - use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60000
): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

// Clean up old rate limit records
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}, 60000) // Clean up every minute

