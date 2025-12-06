'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
  asChild?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      asChild = false,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-md hover:shadow-lg',
      secondary:
        'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary shadow-md hover:shadow-lg',
      outline:
        'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
      ghost: 'text-text-primary hover:bg-surface focus:ring-primary',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className)

    const buttonContent = isLoading ? (
      <>
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Loading...
      </>
    ) : (
      children
    )

    if (asChild && href) {
      const MotionLink = motion(Link)
      return (
        <MotionLink
          href={href}
          className={buttonClasses}
          whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
          whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
          {...(props as any)}
        >
          {buttonContent}
        </MotionLink>
      )
    }

    // Filter out props that conflict with motion.button
    const { onDrag, onDragStart, onDragEnd, ...motionProps } = props as any
    
    return (
      <motion.button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        {...motionProps}
      >
        {buttonContent}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button

