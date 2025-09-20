"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { ProcessSection } from '@/components/ProcessSection'
import { ReviewCarousel } from '@/components/ReviewCarousel'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 pt-16 lg:pt-20">
        
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Reviews Carousel */}
        <ReviewCarousel />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}