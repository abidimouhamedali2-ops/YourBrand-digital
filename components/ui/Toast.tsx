'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X, AlertCircle, Info } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  message: string
  type: ToastType
  isVisible: boolean
  onClose: () => void
  duration?: number
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
}

const colors = {
  success: 'bg-success/10 text-success border-success',
  error: 'bg-error/10 text-error border-error',
  warning: 'bg-warning/10 text-warning border-warning',
  info: 'bg-primary/10 text-primary border-primary',
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) {
  const Icon = icons[type]

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg backdrop-blur-sm ${colors[type]} max-w-md`}
        >
          <Icon className="h-5 w-5 flex-shrink-0" />
          <p className="flex-1 text-sm font-medium">{message}</p>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1 rounded hover:bg-black/10 transition-colors"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

