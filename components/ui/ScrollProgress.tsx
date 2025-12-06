'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-surface z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </div>
  )
}

