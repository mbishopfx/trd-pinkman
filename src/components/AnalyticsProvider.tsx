"use client"

import { useEffect } from 'react'
import { analyticsTracker } from '@/lib/analytics-tracker'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize analytics tracking
    // The tracker automatically starts tracking when imported
    console.debug('Analytics tracking initialized')
  }, [])

  return <>{children}</>
}
