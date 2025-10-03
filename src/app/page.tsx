"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { FinishesShowcase } from '@/components/FinishesShowcase'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <HeroSection />

        {/* Philosophy Section */}
        <section className="py-16 lg:py-24 bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-6">
                "Beauty Will Save the World."
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Inspired by Dostoevsky's words. We believe walls aren't just built — they're composed. 
                Through architectural coatings, designer finishes, and construction expertise, 
                we shape spaces where beauty lives and lasts.
              </p>
            </div>
          </div>
        </section>

        {/* Designer Finishes Philosophy */}
        <section className="py-16 lg:py-20 bg-neutral-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-6 text-neutral-900">
              Designer <span className="italic">finishes</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              "Walls are more than surfaces — they're statements. Our specialty finishes include hand-applied 
              limewash, refined Roman and Moroccan clays, polished Venetian plaster, sleek micro-cement, 
              and durable waterproof plasters. Each technique is rooted in tradition yet designed for modern 
              living, creating depth, texture, and beauty that transform ordinary walls into rooms that tell stories."
            </p>
          </div>
        </section>

        {/* Finishes Showcase */}
        <FinishesShowcase />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}