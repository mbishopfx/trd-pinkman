"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Wrench, Sparkles, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  "True factory finish applied onsite",
  "Premium catalyzed polyurethane systems", 
  "Exceptional clarity, hardness, and longevity",
  "Fraction of the cost of replacement",
  "Professional brands like Renner and Centurion",
  "Tailored to your exact design vision"
]

const applications = [
  "Kitchen cabinets and islands",
  "Bathroom vanities and storage",
  "Built-in entertainment centers",
  "Home office cabinetry",
  "Laundry room cabinets",
  "Custom millwork and trim"
]

const process = [
  {
    step: "01",
    title: "Assessment & Planning",
    description: "Detailed evaluation of cabinet condition and finish requirements."
  },
  {
    step: "02", 
    title: "Preparation & Removal",
    description: "Careful door and drawer removal, hardware cataloging, and surface preparation."
  },
  {
    step: "03",
    title: "Surface Conditioning",
    description: "Professional sanding, cleaning, and priming for optimal finish adhesion."
  },
  {
    step: "04",
    title: "Factory Finish Application",
    description: "Multiple coats of premium catalyzed polyurethane using professional spray equipment."
  },
  {
    step: "05",
    title: "Reassembly & Final",
    description: "Precise reinstallation with upgraded hardware and final quality inspection."
  }
]

export default function CabinetRefinishingPage() {
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
                  Kitchen Cabinet Refinishing
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-display text-neutral-900">
                Cabinet <span className="italic">Refinishing</span>
              </h1>

              <p className="text-xl text-neutral-600 leading-relaxed">
                Why replace when you can transform? We deliver a true factory finish onsite, bringing 
                existing cabinetry to life for a fraction of the replacement cost. Using premium catalyzed 
                (2-component) polyurethane systems from brands like Renner and Centurion, our refinishing 
                offers exceptional clarity, hardness, and longevity. The result: cabinets that look and 
                perform as if newly built — elegant, resilient, and tailored to your space.
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
                  alt="Cabinet refinishing example"
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
                  Why Choose <span className="italic">Cabinet Refinishing</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Professional restoration that delivers factory-quality results at home
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
                      <Sparkles className="w-6 h-6 mr-3 text-neutral-600" />
                      Our Advantage
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
                      <Wrench className="w-6 h-6 mr-3 text-neutral-600" />
                      Perfect For
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
                  Refinishing <span className="italic">Process</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Professional restoration from start to finish with factory-quality results
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
                Transform Your Kitchen Today
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Give your cabinets new life with our professional refinishing services. Achieve the 
                look of brand-new cabinetry at a fraction of the replacement cost, with results that 
                look and perform like they came straight from the factory.
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
