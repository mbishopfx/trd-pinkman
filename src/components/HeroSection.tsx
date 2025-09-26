"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/pinkmanreal1.png"
          alt="Beautiful interior design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-sm tracking-widest text-white/90 font-medium">
            THE PINK GUY PAINTS
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display mb-6 sm:mb-8 leading-tight px-4 sm:px-0"
        >
          Finishes are just the{' '}
          <div className="italic">beginning</div>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
        >
          Architectural finishes that tell their own stories and set the stage for yours.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center px-4 sm:px-0"
        >
          <button className="group bg-neutral-800 hover:bg-neutral-900 text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-widest transition-all duration-300 flex items-center space-x-2 sm:space-x-3">
            <span>VIEW COLLECTIONS</span>
            <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
      
    </section>
  )
}
