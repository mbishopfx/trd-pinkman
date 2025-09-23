"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/utils'

const ServiceCard = ({ service, index }: { service: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="h-full"
  >
    <Card className="h-full hover:elegant-shadow transition-all duration-500 group cursor-pointer relative overflow-hidden elegant-card">
      
      {/* Service Icon */}
      <div className="absolute top-4 right-4 text-4xl opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-300">
        {service.icon}
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-display text-stone-900 group-hover:text-gradient-earth transition-all duration-300">
          {service.title}
        </CardTitle>
        <CardDescription className="text-base text-body leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between">
        
        {/* Features List */}
        <ul className="space-y-3 mb-6">
          {service.features.map((feature: string, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
              className="flex items-start space-x-3 group/item"
            >
              <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5 group-hover/item:text-sage-700 transition-colors" />
              <span className="text-sm text-body group-hover/item:text-stone-900 transition-colors">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Learn More Button */}
        <Link href="/contact">
          <Button
            variant="ghost"
            className="w-full group/btn justify-between hover:bg-warm-100/50 border border-warm-300/50 hover:border-warm-500/70 mt-auto"
          >
            <span className="font-medium">Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-200/10 to-sage-200/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg pointer-events-none" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>
    </Card>
  </motion.div>
)

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 relative" id="services">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl text-display mb-4">
              <span className="text-stone-900">Our </span>
              <span className="text-gradient-earth">Services</span>
            </h2>
            <p className="text-xl text-body mb-8 max-w-3xl mx-auto leading-relaxed">
              Architectural finishes that tell their own stories. From premium painting to specialty finishes and reliable handyman services, 
              we deliver meticulous craftsmanship for every project.
            </p>
            
            {/* Service Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Painting', 'Handyman', 'Specialty Finishes'].map((category, idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="elegant-card px-4 py-2 hover:elegant-shadow transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm font-medium text-body">
                    {category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="portola-card p-8 inline-block">
            <h3 className="text-2xl font-bold text-gradient-earth mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-body mb-6 max-w-2xl">
              Get a free consultation and personalized estimate. We'll help you choose 
              the right architectural finish for your home or business.
            </p>
            <Link href="/contact">
              <Button variant="gradient" size="lg" className="group">
                <span className="font-semibold">Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
