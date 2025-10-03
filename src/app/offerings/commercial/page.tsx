"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Building, Users, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  "Large-scale project management expertise",
  "Premium commercial-grade coatings", 
  "Minimal disruption to business operations",
  "Licensed and fully insured contractors",
  "OSHA compliant safety protocols",
  "Flexible scheduling around business hours"
]

const applications = [
  "Office buildings and corporate spaces",
  "Retail stores and shopping centers",
  "Restaurants and hospitality venues",
  "Healthcare and medical facilities",
  "Educational institutions",
  "Industrial and warehouse facilities"
]

const process = [
  {
    step: "01",
    title: "Site Assessment",
    description: "Comprehensive evaluation of commercial space requirements and logistics planning."
  },
  {
    step: "02", 
    title: "Project Planning",
    description: "Detailed scheduling and coordination to minimize business disruption."
  },
  {
    step: "03",
    title: "Surface Preparation",
    description: "Professional preparation using commercial-grade equipment and techniques."
  },
  {
    step: "04",
    title: "Application & Execution",
    description: "Efficient application of premium coatings with attention to detail and timeline."
  },
  {
    step: "05",
    title: "Quality Assurance",
    description: "Final inspection and client walkthrough to ensure complete satisfaction."
  }
]

export default function CommercialPage() {
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
                  Commercial Painting
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-display text-neutral-900">
                Commercial <span className="italic">Projects</span>
              </h1>

              <p className="text-xl text-neutral-600 leading-relaxed">
                Bringing professional-grade finishes to commercial spaces with precision, efficiency, 
                and minimal disruption to your business operations. From office buildings to retail 
                environments, we deliver architectural coatings that enhance brand image while standing 
                up to high-traffic demands. Our team understands the unique requirements of commercial 
                projects — tight schedules, budget constraints, and the need for lasting performance.
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
                  alt="Commercial painting example"
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
                  Why Choose Our <span className="italic">Commercial Services</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Professional expertise tailored for business environments and commercial demands
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
                      <Building className="w-6 h-6 mr-3 text-neutral-600" />
                      Our Expertise
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
                      <Users className="w-6 h-6 mr-3 text-neutral-600" />
                      Commercial Spaces
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
                  Commercial <span className="italic">Process</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Streamlined approach designed for business environments and operational efficiency
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
                Elevate Your Business Space
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Partner with us to transform your commercial environment with professional finishes 
                that reflect your brand's quality and attention to detail. We work efficiently and 
                effectively to minimize disruption while maximizing impact.
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
