'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode
  error?: string
}

export default function Checkbox({ label, error, className, ...props }: CheckboxProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-start space-x-3 cursor-pointer group">
        <div className="relative flex-shrink-0">
          <input
            type="checkbox"
            className="sr-only"
            {...props}
          />
          <div
            className={cn(
              'h-5 w-5 rounded border-2 transition-all duration-200 flex items-center justify-center',
              props.checked
                ? 'bg-primary border-primary'
                : 'bg-background border-border group-hover:border-primary/50',
              error && 'border-error',
              props.disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {props.checked && (
              <Check className="h-3 w-3 text-white" strokeWidth={3} />
            )}
          </div>
        </div>
        {label && (
          <span className={cn(
            'text-sm text-text-primary select-none',
            props.disabled && 'opacity-50'
          )}>
            {label}
            {props.required && typeof label === 'string' && <span className="text-error ml-1">*</span>}
          </span>
        )}
      </label>
      {error && <p className="text-sm text-error ml-8">{error}</p>}
    </div>
  )
}

