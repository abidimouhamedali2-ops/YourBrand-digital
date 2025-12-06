import React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-text-primary mb-2"
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-y',
            'bg-background text-text-primary placeholder:text-text-secondary',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'min-h-[120px]',
            error
              ? 'border-error focus:ring-error'
              : 'border-border hover:border-primary-light',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          ref={ref}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-2 text-sm text-error" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${textareaId}-helper`} className="mt-2 text-sm text-text-secondary">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea

