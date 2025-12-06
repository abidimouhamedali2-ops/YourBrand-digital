'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = false, onClick }: CardProps) {
  const cardClasses = cn(
    'bg-background dark:bg-surface-dark rounded-xl border border-border dark:border-border-dark p-6 shadow-md transition-all duration-300',
    hover && 'hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer',
    className
  )

  const Component = hover || onClick ? motion.div : 'div'

  const motionProps = hover || onClick ? { 
    whileHover: { y: -4, scale: 1.02 }, 
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: 'easeOut' } 
  } : {}

  return (
    <Component className={cardClasses} onClick={onClick} {...motionProps}>
      {children}
    </Component>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return <h3 className={cn('text-h4 font-semibold text-text-primary', className)}>{children}</h3>
}

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return <p className={cn('text-body-sm text-text-secondary mt-2', className)}>{children}</p>
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('text-body text-text-primary', className)}>{children}</div>
}

