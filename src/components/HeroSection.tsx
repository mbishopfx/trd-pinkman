"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/utils'

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 particles opacity-20" />
      
      {/* Subtle Floating Particles */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: element.opacity, scale: 1 }}
          transition={{ 
            delay: element.delay,
            duration: 1.5,
            type: "spring",
            stiffness: 100 
          }}
          className="absolute hidden lg:block"
          style={{ left: element.x, top: element.y }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [element.opacity, element.opacity * 1.5, element.opacity]
            }}
            transition={{ 
              duration: 6 + index * 0.8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className={`${element.size} rounded-full bg-gradient-to-br from-pink-400 to-pink-600 blur-sm`}
          />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-12 mx-auto"
        >
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-white/90">
            Rated 4.8/5 Stars • 33+ Reviews
          </span>
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-responsive-xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Sherman Oaks </span>
          <span className="text-gradient-pink animate-pulse">Handyman</span>
          <br />
          <span className="text-white">& House </span>
          <span className="text-gradient-pink animate-pulse">Painting</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl lg:text-3xl font-semibold text-pink-300 mb-4"
        >
          It's All in the Prep.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg lg:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Precision‑first painting and dependable handyman repairs across Sherman Oaks, Encino, 
          and the greater Los Angeles area. From drywall fixes to luxury finishes.
        </motion.p>

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
              className="glass-card p-4 hover:glow-pink transition-all duration-300"
            >
              <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-white/90">
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
          <Button
            variant="gradient"
            size="xl"
            onClick={handleCall}
            className="group w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            <span className="font-bold">Call (818) 383-2527</span>
          </Button>

          <Button
            variant="outline"
            size="xl"
            onClick={handleQuote}
            className="w-full sm:w-auto group"
          >
            <span className="font-semibold">Get Free Quote</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.div>
          </Button>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center text-white/60 text-sm"
        >
          <p>Mon-Fri: 8AM-5PM • Sat: By Appointment • Sun: Closed</p>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
      
    </section>
  )
}
