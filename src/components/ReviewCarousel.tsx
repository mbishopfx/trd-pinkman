"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/utils'

const ReviewCard = ({ testimonial, index }: { testimonial: any, index: number }) => (
  <motion.div
    key={testimonial.id}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex-shrink-0 w-80 lg:w-96 mx-4"
  >
    <div className="elegant-card h-full p-6 relative group hover:elegant-shadow transition-all duration-500">
      
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
        <Quote className="w-8 h-8 text-warm-600" />
      </div>

      {/* Stars */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <Star className="w-5 h-5 text-amber-600 fill-current" />
          </motion.div>
        ))}
      </div>

      {/* Review Text */}
      <blockquote className="text-body mb-4 text-base leading-relaxed group-hover:text-stone-900 transition-colors">
        "{testimonial.text}"
      </blockquote>

      {/* Author */}
      <footer className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-warm-500 to-warm-600 flex items-center justify-center font-bold text-white text-sm">
          {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
        </div>
        <div>
          <p className="font-semibold text-stone-900 group-hover:text-warm-700 transition-colors">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted">
            Verified Customer
          </p>
        </div>
      </footer>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-warm-100/20 to-sage-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  </motion.div>
)

export function ReviewCarousel() {
  const controls = useAnimation()
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  useEffect(() => {
    const animate = async () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.scrollWidth / 3 // Divide by 3 because we tripled the items
      
      await controls.start({
        x: -containerWidth,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }
      })
    }

    animate()
  }, [controls])

  return (
    <section className="py-16 lg:py-24 overflow-hidden relative">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl text-display mb-4">
            <span className="text-stone-900">What Our </span>
            <span className="text-gradient-earth">Clients Say</span>
          </h2>
          <p className="text-xl text-body mb-8 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what homeowners across LA are saying about our work.
          </p>
          
          {/* Rating Summary */}
          <div className="elegant-card inline-flex items-center space-x-4 px-6 py-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-600 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gradient-earth">4.8/5</p>
              <p className="text-sm text-body">Based on 33+ reviews</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative">
        
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />
        
        {/* Carousel Container */}
        <motion.div
          ref={containerRef}
          className="flex items-stretch"
          animate={controls}
          style={{ x }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <ReviewCard
              key={`${testimonial.id}-${Math.floor(index / testimonials.length)}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(160, 138, 117, 0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

    </section>
  )
}
