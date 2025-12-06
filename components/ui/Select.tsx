'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: SelectOption[]
  placeholder?: string
}

export default function Select({
  label,
  error,
  helperText,
  options,
  placeholder,
  className,
  required,
  ...props
}: SelectProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-text-primary">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-colors duration-200',
            'bg-background text-text-primary',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            error
              ? 'border-error focus:ring-error'
              : 'border-border hover:border-primary/50',
            'appearance-none cursor-pointer',
            className
          )}
          required={required}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-tertiary pointer-events-none" />
      </div>
      {error && <p className="text-sm text-error">{error}</p>}
      {helperText && !error && <p className="text-sm text-text-tertiary">{helperText}</p>}
    </div>
  )
}

