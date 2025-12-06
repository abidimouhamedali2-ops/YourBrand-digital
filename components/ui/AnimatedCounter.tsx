'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true
      let startTime: number | null = null
      const startValue = 0

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.floor(startValue + (end - startValue) * easeOut)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

