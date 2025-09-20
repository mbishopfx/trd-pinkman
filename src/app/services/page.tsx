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
    <Card className="h-full hover:scale-105 transition-all duration-500 group cursor-pointer relative overflow-hidden">
      
      {/* Service Icon */}
      <div className="absolute top-6 right-6 text-5xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300">
        {service.icon}
      </div>

      <CardHeader className="pb-6">
        <CardTitle className="text-2xl group-hover:text-3xl transition-all duration-300">
          {service.title}
        </CardTitle>
        <CardDescription className="text-lg leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        
        {/* Features List */}
        <div>
          <h4 className="font-semibold text-pink-300 mb-4 text-lg">What's Included:</h4>
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
                <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1 group-hover/item:text-pink-300 transition-colors" />
                <span className="text-white/80 group-hover/item:text-white/90 transition-colors">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <Button
          variant="gradient"
          className="w-full group/btn"
          onClick={() => window.location.href = 'tel:+18183832527'}
        >
          <Phone className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
          <span className="font-semibold">Get Quote for {service.title}</span>
        </Button>
      </CardContent>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none" />
    </Card>
  </motion.div>
)

export default function ServicesPage() {
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
              <Link href="/" className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors group">
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
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Our </span>
                  <span className="text-gradient-pink">Services</span>
                </h1>
                <p className="text-xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed">
                  From precision painting to specialty finishes and reliable handyman services, 
                  we deliver meticulous craftsmanship for every project across Sherman Oaks, 
                  Encino, and greater Los Angeles.
                </p>
                
                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  <div className="glass-card px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-2xl font-bold text-gradient-pink">4.8/5</span>
                    </div>
                    <p className="text-sm text-white/60">Customer Rating</p>
                  </div>
                  <div className="glass-card px-6 py-4">
                    <span className="text-2xl font-bold text-gradient-pink">33+</span>
                    <p className="text-sm text-white/60">Happy Customers</p>
                  </div>
                  <div className="glass-card px-6 py-4">
                    <span className="text-2xl font-bold text-gradient-pink">7</span>
                    <p className="text-sm text-white/60">Service Categories</p>
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
              className="glass-card p-8 lg:p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-pink mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Get a free consultation and personalized estimate for your project. 
                We'll help you choose the right solution and provide transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  variant="gradient"
                  size="xl"
                  onClick={() => window.location.href = 'tel:+18183832527'}
                  className="group"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  <span className="font-bold">Call (818) 383-2527</span>
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="xl"
                    className="group"
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
