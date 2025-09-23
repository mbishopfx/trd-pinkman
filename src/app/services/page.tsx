"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Phone, Star } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/utils'

const ServiceDetailCard = ({ service, index }: { service: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="h-full"
  >
    <Card className="h-full hover:elegant-shadow transition-all duration-500 group cursor-pointer relative overflow-hidden elegant-card">
      
      {/* Service Icon */}
      <div className="absolute top-6 right-6 text-5xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300">
        {service.icon}
      </div>

      <CardHeader className="pb-6">
        <CardTitle className="text-2xl text-display text-stone-900 group-hover:text-gradient-earth transition-all duration-300">
          {service.title}
        </CardTitle>
        <CardDescription className="text-lg text-body leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        
        {/* Features List */}
        <div>
          <h4 className="font-semibold text-warm-700 mb-4 text-lg">What's Included:</h4>
          <ul className="space-y-3">
            {service.features.map((feature: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                className="flex items-start space-x-3 group/item"
              >
                <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-1 group-hover/item:text-sage-700 transition-colors" />
                <span className="text-body group-hover/item:text-stone-800 transition-colors">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <button
          className="w-full group/btn portola-button py-3"
          onClick={() => window.location.href = 'tel:+18183832527'}
        >
          <Phone className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
          <span className="font-semibold">Get Quote for {service.title}</span>
        </button>
      </CardContent>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-200/10 to-sage-200/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg pointer-events-none" />
    </Card>
  </motion.div>
)

export default function ServicesPage() {
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
                  <span className="text-stone-900">Our </span>
                  <span className="text-gradient-earth">Services</span>
                </h1>
                <p className="text-xl text-body mb-8 max-w-4xl mx-auto leading-relaxed">
                  Architectural finishes that tell their own stories. From premium painting services 
                  to specialty finishes and reliable handyman services, we deliver meticulous 
                  craftsmanship for every project across Sherman Oaks, Encino, and greater Los Angeles.
                </p>
                
                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  <div className="elegant-card px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-amber-600 fill-current" />
                      <span className="text-2xl font-bold text-gradient-earth">4.8/5</span>
                    </div>
                    <p className="text-sm text-muted">Customer Rating</p>
                  </div>
                  <div className="elegant-card px-6 py-4">
                    <span className="text-2xl font-bold text-gradient-earth">33+</span>
                    <p className="text-sm text-muted">Happy Customers</p>
                  </div>
                  <div className="elegant-card px-6 py-4">
                    <span className="text-2xl font-bold text-gradient-earth">7+</span>
                    <p className="text-sm text-muted">Specialty Finishes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceDetailCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="portola-card"
            >
              <h2 className="text-3xl lg:text-4xl text-display text-gradient-earth mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-body mb-8 leading-relaxed">
                Get a free consultation and personalized estimate for your project. 
                We'll help you choose the right architectural finish and provide transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={() => window.location.href = 'tel:+18183832527'}
                  className="group portola-button px-10 py-4"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  <span className="font-semibold">Call (818) 383-2527</span>
                </button>
                <Link href="/contact">
                  <button className="group portola-button-outline px-10 py-4">
                    <span className="font-semibold">Get Free Quote</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.div>
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
