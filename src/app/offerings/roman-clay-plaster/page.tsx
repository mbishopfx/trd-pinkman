"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Brush, Palette, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  "Velvety, matte-suede finish with natural movement",
  "Applied by hand with trowels for authentic texture", 
  "Brings depth, warmth, and soft luminosity to walls",
  "Balances old-world artistry with modern sophistication",
  "Available in Roman and Moroccan clay varieties",
  "Creates subtle, dynamic patina that evolves over time"
]

const applications = [
  "Feature walls and accent areas",
  "Living rooms and bedrooms",
  "Dining rooms and entryways",
  "Luxury residential interiors",
  "Traditional and contemporary settings",
  "High-end hospitality spaces"
]

const process = [
  {
    step: "01",
    title: "Surface Assessment",
    description: "Evaluation of wall conditions and preparation requirements for optimal clay adhesion."
  },
  {
    step: "02", 
    title: "Base Preparation",
    description: "Specialized primer application designed specifically for clay-based finishes."
  },
  {
    step: "03",
    title: "Clay Application",
    description: "Hand-trowel application in thin layers to build up the characteristic texture and depth."
  },
  {
    step: "04",
    title: "Texture Development",
    description: "Artistic manipulation of the clay to create the desired pattern and visual movement."
  },
  {
    step: "05",
    title: "Final Finishing",
    description: "Protective sealing and final touches to ensure longevity and enhance the natural beauty."
  }
]

export default function RomanClayPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="pt-20">
        
        {/* Back Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center space-x-2 text-neutral-600 hover:text-neutral-800 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <span className="text-sm tracking-widest text-neutral-500 font-medium uppercase">
                  Designer Finishes
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-display text-neutral-900">
                Roman <span className="italic">Clay</span>
              </h1>

              <p className="text-xl text-neutral-600 leading-relaxed">
                An homage to ancient techniques, applied by hand with trowels to create a velvety, 
                matte-suede finish. Smooth to the touch yet rich with movement, these clays bring 
                depth, warmth, and a soft luminosity to walls. Whether Roman or Moroccan, the effect 
                is timeless — a refined surface that balances old-world artistry with modern sophistication.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+18183832527"
                  className="bg-neutral-800 text-white px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-900 inline-flex items-center justify-center"
                >
                  <span>Get Quote</span>
                </a>
                <Link 
                  href="/contact"
                  className="border border-neutral-800 text-neutral-800 px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-800 hover:text-white inline-flex items-center justify-center"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/pinkmanreal1.png"
                  alt="Roman Clay finish example"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-display mb-4 text-neutral-900">
                  Why Choose <span className="italic">Roman Clay</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Timeless elegance meets modern sophistication in every hand-applied finish
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-neutral-900 mb-4 flex items-center">
                      <Brush className="w-6 h-6 mr-3 text-neutral-600" />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-neutral-900 mb-4 flex items-center">
                      <Palette className="w-6 h-6 mr-3 text-neutral-600" />
                      Ideal Applications
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {applications.map((application, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-neutral-800 rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-neutral-600">{application}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-display mb-4 text-neutral-900">
                  Application <span className="italic">Process</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Artisan techniques passed down through generations, applied with modern precision
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display mb-3 text-neutral-900">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-24 bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6">
                Ready for Ancient Artistry?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Let our skilled artisans bring the timeless beauty of Roman clay to your space. 
                Experience the depth, warmth, and sophisticated texture that only hand-applied clay can provide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+18183832527"
                  className="bg-white text-neutral-800 px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-100 inline-flex items-center justify-center space-x-2"
                >
                  <span>Call (818) 383-2527</span>
                </a>
                <Link 
                  href="/contact"
                  className="border border-white text-white px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-neutral-800 inline-flex items-center justify-center"
                >
                  <span>Request Consultation</span>
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
