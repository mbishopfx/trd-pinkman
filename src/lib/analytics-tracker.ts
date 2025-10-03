"use client"

// Client-side analytics tracker that works with Vercel Analytics
// This captures real visitor data and stores it for our admin dashboard

interface AnalyticsEvent {
  page: string
  timestamp: number
  userAgent: string
  referrer: string
  sessionId: string
}

class AnalyticsTracker {
  private sessionId: string
  private startTime: number

  constructor() {
    this.sessionId = this.generateSessionId()
    this.startTime = Date.now()
    
    if (typeof window !== 'undefined') {
      this.init()
    }
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
  }

  private init() {
    // Track page view
    this.trackPageView()
    
    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.trackPageView()
      }
    })

    // Track session duration on page unload
    window.addEventListener('beforeunload', () => {
      this.trackSessionEnd()
    })
  }

  private async trackPageView() {
    const event: AnalyticsEvent = {
      page: window.location.pathname,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      sessionId: this.sessionId
    }

    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      })
    } catch (error) {
      console.debug('Analytics tracking failed:', error)
    }
  }

  private async trackSessionEnd() {
    const sessionDuration = Date.now() - this.startTime
    
    try {
      await fetch('/api/analytics/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sessionId: this.sessionId,
          duration: sessionDuration,
          endTime: Date.now()
        })
      })
    } catch (error) {
      console.debug('Session tracking failed:', error)
    }
  }

  // Public method to track custom events
  public async trackEvent(eventName: string, properties?: Record<string, any>) {
    try {
      await fetch('/api/analytics/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event: eventName,
          properties,
          sessionId: this.sessionId,
          timestamp: Date.now(),
          page: window.location.pathname
        })
      })
    } catch (error) {
      console.debug('Event tracking failed:', error)
    }
  }
}

// Export singleton instance
export const analyticsTracker = new AnalyticsTracker()

// Export hook for React components
export function useAnalytics() {
  return {
    trackEvent: analyticsTracker.trackEvent.bind(analyticsTracker)
  }
}
