"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { processSteps } from '@/lib/utils'

const ProcessStep = ({ step, index }: { step: any, index: number }) => (
  <div className="relative flex flex-col items-center">
    
    {/* Step Number & Icon */}
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 200
      }}
      className="relative z-10 group cursor-pointer"
    >
      {/* Step Circle */}
      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full elegant-card flex items-center justify-center group-hover:elegant-shadow transition-all duration-300 group-hover:scale-110 mb-6">
        <span className="text-2xl lg:text-3xl font-bold text-gradient-earth group-hover:animate-pulse">
          {step.step}
        </span>
        
        {/* Animated Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-warm-500/30"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>
    </motion.div>


    {/* Step Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
      className="text-center max-w-sm"
    >
      <h3 className="text-xl lg:text-2xl font-bold text-stone-900 mb-3 group-hover:text-gradient-earth transition-all duration-300">
        {step.title}
      </h3>
      <p className="text-body leading-relaxed group-hover:text-stone-900 transition-colors">
        {step.description}
      </p>
    </motion.div>
  </div>
)

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 relative" id="process">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/5 to-transparent" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(30deg, #ec4899 12%, transparent 12.5%, transparent 87%, #ec4899 87.5%, #ec4899),
                           linear-gradient(150deg, #ec4899 12%, transparent 12.5%, transparent 87%, #ec4899 87.5%, #ec4899),
                           linear-gradient(30deg, #ec4899 12%, transparent 12.5%, transparent 87%, #ec4899 87.5%, #ec4899),
                           linear-gradient(150deg, #ec4899 12%, transparent 12.5%, transparent 87%, #ec4899 87.5%, #ec4899)`,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-stone-900">Our Prep‑First </span>
              <span className="text-gradient-earth">Process</span>
            </h2>
            <p className="text-xl text-body mb-8 max-w-3xl mx-auto leading-relaxed">
              Every lasting finish starts with meticulous preparation. Here's our proven 7-step process 
              that ensures beautiful results and fewer callbacks.
            </p>
            
            {/* Process Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-card inline-flex items-center space-x-3 px-6 py-3"
            >
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-stone-800">
                Proven • Reliable • Professional
              </span>
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-20">
          {processSteps.slice(0, 4).map((step, index) => (
            <ProcessStep
              key={step.step}
              step={step}
              index={index}
            />
          ))}
        </div>

        {/* Second Row Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {processSteps.slice(4).map((step, index) => (
            <ProcessStep
              key={step.step}
              step={step}
              index={index + 4}
            />
          ))}
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-12">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <ProcessStep
                step={step}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gradient-pink mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-body mb-6 leading-relaxed">
              See why our prep-first approach creates finishes that last longer, look better, 
              and require fewer touch-ups over time.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <div className="glass-button px-8 py-4 cursor-pointer group">
                <span className="font-semibold text-lg group-hover:text-pink-300 transition-colors">
                  Start Your Project Today
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
