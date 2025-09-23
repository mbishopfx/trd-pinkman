"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/utils'
import Image from 'next/image'

const floatingElements = [
  { size: 'w-3 h-3', delay: 0, x: '15%', y: '25%', opacity: 0.3 },
  { size: 'w-2 h-2', delay: 0.5, x: '85%', y: '15%', opacity: 0.2 },
  { size: 'w-4 h-4', delay: 1, x: '25%', y: '75%', opacity: 0.4 },
  { size: 'w-2 h-2', delay: 1.5, x: '75%', y: '65%', opacity: 0.3 },
  { size: 'w-3 h-3', delay: 2, x: '10%', y: '45%', opacity: 0.2 },
  { size: 'w-2 h-2', delay: 2.5, x: '90%', y: '85%', opacity: 0.3 },
]

const benefits = [
  "4.8/5 Google Rating",
  "33+ Happy Customers", 
  "Meticulous Prep Process",
  "Free Consultation"
]

export function HeroSection() {
  const handleCall = () => {
    window.location.href = 'tel:+18183832527'
  }

  const handleQuote = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden portola-gradient">
      
      {/* Background Elements */}
      <div className="absolute inset-0 texture-overlay" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 elegant-card px-6 py-3 mb-12 mx-auto"
        >
          <Star className="w-4 h-4 text-amber-600 fill-current" />
          <span className="text-sm font-medium text-stone-800">
            Rated 4.8/5 Stars • 33+ Reviews
          </span>
          <Star className="w-4 h-4 text-amber-600 fill-current" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-responsive-xl text-display mb-6 leading-tight"
        >
          <span className="text-stone-900">Finishes are just the </span>
          <span className="text-gradient-earth">beginning</span>
          <br />
          <span className="text-stone-700 text-responsive-lg font-normal italic">
            Sherman Oaks' premier painting & handyman services
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl lg:text-3xl font-semibold text-gradient-sage mb-4"
        >
          "It's All in the Prep"
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg lg:text-xl text-body mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Architectural finishes that tell their own stories and set the stage for yours. 
          Precision‑first painting, specialty finishes, and dependable handyman services 
          across Sherman Oaks, Encino, and the greater Los Angeles area.
        </motion.p>

        {/* Featured Work Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center mb-8"
        >
          <div className="relative group max-w-2xl">
            <div className="absolute -inset-2 bg-gradient-to-r from-warm-400 to-sage-400 rounded-lg opacity-20 group-hover:opacity-30 blur transition-all duration-300" />
            <div className="relative elegant-card p-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden elegant-shadow">
                  <Image
                    src="/headshot.png"
                    alt="The Pink Guy - Master Craftsman"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-display text-stone-900 mb-2">
                  Master Craftsmanship
                </h3>
                <p className="text-body mb-4">
                  25 years of experience in premium interior and exterior painting, 
                  specialty finishes, and precision handyman services.
                </p>
                <div className="flex justify-center space-x-4 text-sm text-muted">
                  <span>• Licensed & Insured</span>
                  <span>• Angie's List Super Service</span>
                  <span>• 4.8★ Rating</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="elegant-card p-4 hover:elegant-shadow transition-all duration-300"
            >
              <CheckCircle className="w-6 h-6 text-sage-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-stone-800">
                {benefit}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
        >
          <button
            onClick={handleCall}
            className="group w-full sm:w-auto portola-button px-12 py-4"
          >
            <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            <span className="font-semibold">Call (818) 383-2527</span>
          </button>

          <button
            onClick={handleQuote}
            className="w-full sm:w-auto group portola-button-outline px-12 py-4"
          >
            <span className="font-semibold">View Collections</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.div>
          </button>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center text-muted text-sm"
        >
          <p>Hours: Mon-Fri 8AM-5PM • Sat by Appointment • Serving Sherman Oaks & Los Angeles</p>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-50/80 to-transparent" />
      
    </section>
  )
}
