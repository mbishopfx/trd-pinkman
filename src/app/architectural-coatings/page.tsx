"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Brush, Palette, Shield, Droplets, Layers, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const coatingTypes = [
  {
    icon: <Brush className="w-8 h-8" />,
    title: "Traditional Paints",
    description: "High-quality interior and exterior paints designed for durability and beauty.",
    features: ["Premium Acrylic Formulations", "Low-VOC Options", "Color Matching", "Multiple Finish Options"],
    applications: ["Residential Interior", "Residential Exterior", "Commercial Spaces", "Trim & Detail Work"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Specialty Coatings",
    description: "Advanced coating systems for specific applications and enhanced performance.",
    features: ["Antimicrobial Properties", "High-Traffic Durability", "Stain Resistance", "Easy Maintenance"],
    applications: ["Healthcare Facilities", "Educational Institutions", "High-Traffic Areas", "Moisture-Prone Zones"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Protective Coatings",
    description: "Industrial-grade protection against weathering, corrosion, and wear.",
    features: ["Weather Resistance", "UV Protection", "Corrosion Prevention", "Extended Lifespan"],
    applications: ["Metal Structures", "Industrial Equipment", "Marine Applications", "Harsh Environments"]
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Waterproof Systems",
    description: "Comprehensive waterproofing solutions for interior and exterior applications.",
    features: ["Complete Moisture Barrier", "Breathable Membranes", "Crack Bridging", "Long-Term Protection"],
    applications: ["Basements", "Bathrooms", "Pool Areas", "Foundation Walls"]
  }
]

const technicalSpecs = [
  {
    category: "Performance Standards",
    specifications: [
      "ASTM D3359 - Adhesion Testing",
      "ASTM D4060 - Abrasion Resistance", 
      "ASTM G154 - UV Resistance",
      "ASTM D2244 - Color Retention"
    ]
  },
  {
    category: "Environmental Compliance",
    specifications: [
      "Low VOC Formulations (<50 g/L)",
      "GREENGUARD Gold Certified Options",
      "California CARB Compliant",
      "LEED Contribution Credits"
    ]
  },
  {
    category: "Application Methods",
    specifications: [
      "Spray Application Systems",
      "Brush & Roller Techniques",
      "Airless Spray Equipment",
      "Electrostatic Application"
    ]
  }
]

const processSteps = [
  {
    step: "01",
    title: "Surface Analysis",
    description: "Comprehensive evaluation of substrate conditions, environmental factors, and performance requirements."
  },
  {
    step: "02",
    title: "System Selection",
    description: "Selection of appropriate coating system based on application requirements and environmental conditions."
  },
  {
    step: "03",
    title: "Surface Preparation",
    description: "Proper cleaning, priming, and surface preparation to ensure optimal coating adhesion and performance."
  },
  {
    step: "04",
    title: "Application",
    description: "Professional application using appropriate techniques and equipment for consistent, high-quality results."
  },
  {
    step: "05",
    title: "Quality Control",
    description: "Inspection and testing to verify coating thickness, adhesion, and overall system integrity."
  }
]

export default function ArchitecturalCoatingsPage() {
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-display mb-6 text-neutral-900">
                Architectural <span className="italic">Coatings</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Professional-grade coating systems engineered for performance, beauty, and longevity. 
                From traditional paints to specialized protective systems.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="py-16 lg:py-20 bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6">
                Advanced Coating Technology
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Paint, at its highest level, becomes architecture. Our team delivers everything from meticulous 
                interior repaints and durable exterior finishes to rich wood staining and flawless kitchen cabinet 
                refinishing. For new construction, we provide full-service painting solutions designed to last. 
                More than just color, our coatings are the protective skin of a home — blending precision, beauty, 
                and durability in every brushstroke.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Coating Types */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-display mb-4 text-neutral-900">
                  Coating <span className="italic">Systems</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Comprehensive range of architectural coatings for every application and performance requirement
                </p>
              </motion.div>
            </div>

            {/* Coating Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coatingTypes.map((coating, index) => (
                <motion.div
                  key={coating.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-neutral-800 text-white rounded-lg flex items-center justify-center">
                          {coating.icon}
                        </div>
                        <CardTitle className="text-xl font-display text-neutral-900">
                          {coating.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-neutral-600 leading-relaxed">
                        {coating.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {coating.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-neutral-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Applications:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {coating.applications.map((app, idx) => (
                            <div key={idx} className="text-sm text-neutral-600">
                              • {app}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
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
                  Technical <span className="italic">Excellence</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Industry-leading standards and certifications ensure optimal performance and compliance
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={spec.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl font-display text-neutral-900 mb-4">
                        {spec.category}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        {spec.specifications.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full mt-2.5 flex-shrink-0" />
                            <span className="text-sm text-neutral-600 leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
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
                  Systematic approach ensuring optimal coating performance and longevity
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
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
                Need Professional Coating Solutions?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Our coating specialists can help you select and apply the right system for your project requirements. 
                From specification to completion, we ensure optimal performance and aesthetics.
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
