"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen relative portola-gradient">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 texture-overlay" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 pt-24 lg:pt-28">
        
        {/* Header Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link href="/" className="inline-flex items-center space-x-2 text-warm-600 hover:text-warm-700 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>
            </motion.div>

            {/* Page Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-6xl text-display mb-6">
                  <span className="text-stone-900">Contact </span>
                  <span className="text-gradient-earth">Us</span>
                </h1>
                <p className="text-xl text-body mb-8 max-w-4xl mx-auto leading-relaxed">
                  Ready to transform your space with architectural finishes that tell their own stories? 
                  Get in touch for a free consultation and personalized estimate. We're here to help bring your vision to life.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
