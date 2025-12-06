'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SafeImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
  placeholder?: React.ReactNode
  fallbackClassName?: string
}

export default function SafeImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className,
  sizes,
  priority = false,
  placeholder,
  fallbackClassName,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20',
          fill ? 'absolute inset-0' : '',
          fallbackClassName || className
        )}
      >
        {placeholder || (
          <div className="text-center p-4">
            <div className="text-4xl mb-2 opacity-50">📷</div>
            <p className="text-xs text-text-tertiary">Image not found</p>
          </div>
        )}
      </div>
    )
  }

  const imageProps = fill
    ? {
        fill: true as const,
        sizes,
      }
    : {
        width: width || 800,
        height: height || 600,
      }

  return (
    <div className={cn('relative', fill ? 'absolute inset-0' : '', className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        className={cn('object-cover', isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300', className)}
        priority={priority}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

