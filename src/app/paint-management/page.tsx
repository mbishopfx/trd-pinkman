"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Palette, Clock, Users, CheckCircle, Shield, Brush, PaintBucket, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Project Planning & Design",
    description: "Comprehensive planning from color consultation to timeline development, ensuring every detail is considered before the first brush touches the wall.",
    features: ["Color Consultation", "Surface Analysis", "Timeline Development", "Material Selection"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Coordination",
    description: "Seamless coordination of painters, specialty finishers, and support crews to ensure projects flow smoothly from start to finish.",
    features: ["Crew Scheduling", "Skills Matching", "Quality Standards", "Safety Protocols"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Timeline Management",
    description: "Precise scheduling and milestone tracking to keep projects on time and within budget, with real-time updates for clients.",
    features: ["Milestone Tracking", "Progress Reports", "Schedule Optimization", "Contingency Planning"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Quality Assurance",
    description: "Multi-point quality checks throughout every project, ensuring our signature standards are met at every phase.",
    features: ["Surface Preparation Standards", "Application Monitoring", "Final Inspections", "Touch-up Protocols"]
  }
]

const projectTypes = [
  {
    title: "Residential Interior",
    description: "Complete interior painting projects with architectural finish integration",
    services: ["Room-by-room planning", "Furniture protection", "Specialty finishes", "Color transitions"],
    timeframe: "3-7 days typical"
  },
  {
    title: "Residential Exterior",
    description: "Weather-coordinated exterior painting with surface preparation focus",
    services: ["Weather planning", "Surface repairs", "Multiple coat systems", "Landscape protection"],
    timeframe: "1-2 weeks typical"
  },
  {
    title: "Commercial Projects",
    description: "Large-scale commercial painting with minimal business disruption",
    services: ["Off-hours scheduling", "Phased completion", "Safety compliance", "Brand color matching"],
    timeframe: "2-6 weeks typical"
  },
  {
    title: "Specialty Finishes",
    description: "Architectural finishes requiring specialized techniques and materials",
    services: ["Technique selection", "Material sourcing", "Application oversight", "Curing management"],
    timeframe: "1-3 weeks typical"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Detailed assessment of project scope, surface conditions, and client objectives"
  },
  {
    step: "02",
    title: "Project Design",
    description: "Color selection, material specification, and comprehensive project timeline development"
  },
  {
    step: "03",
    title: "Team Assembly",
    description: "Crew selection and coordination based on project requirements and specialized skills needed"
  },
  {
    step: "04",
    title: "Execution Management",
    description: "Daily oversight, quality monitoring, and progress tracking throughout the project"
  },
  {
    step: "05",
    title: "Final Delivery",
    description: "Quality inspection, client walkthrough, and project completion documentation"
  }
]

export default function PaintManagementPage() {
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
                Paint <span className="italic">Management</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Professional project management for painting and architectural finish projects. 
                From planning to completion, we coordinate every detail so you can focus on 
                what matters most while we deliver exceptional results.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Philosophy Section */}
        <section className="py-16 lg:py-20 bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6">
                Beyond Project Management
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Paint management is about orchestrating the perfect finish. Every brushstroke, 
                every surface, every timeline detail is carefully coordinated to create results 
                that exceed expectations. We don't just manage projects — we conduct symphonies of color and craftsmanship.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Services */}
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
                  Management <span className="italic">Services</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Comprehensive oversight ensuring every paint project delivers exceptional results
                </p>
              </motion.div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-neutral-800 text-white rounded-lg flex items-center justify-center">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl font-display text-neutral-900">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-neutral-600">{feature}</span>
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

        {/* Project Types */}
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
                  Project <span className="italic">Types</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Specialized management approaches for different types of painting projects
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectTypes.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl font-display text-neutral-900 mb-2">
                        {project.title}
                      </CardTitle>
                      <p className="text-neutral-600">{project.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Management Focus:</h4>
                        <div className="space-y-2">
                          {project.services.map((service, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-neutral-800 rounded-full" />
                              <span className="text-sm text-neutral-600">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-neutral-200">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-neutral-500" />
                          <span className="text-sm font-medium text-neutral-700">{project.timeframe}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                  Management <span className="italic">Process</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Our systematic approach to delivering exceptional paint project results
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

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24 bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6">
                Paint Management <span className="italic">Inquiry</span>
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Ready to experience professional paint project management? Let us coordinate 
                every detail of your painting project from start to finish.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 p-8 lg:p-12 rounded-lg backdrop-blur-sm"
            >
              <form className="space-y-6">
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors text-white placeholder-white/60"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors text-white placeholder-white/60"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors text-white placeholder-white/60"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Project Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors text-white"
                    >
                      <option value="" className="text-neutral-900">Select project type</option>
                      <option value="residential-interior" className="text-neutral-900">Residential Interior</option>
                      <option value="residential-exterior" className="text-neutral-900">Residential Exterior</option>
                      <option value="commercial" className="text-neutral-900">Commercial Project</option>
                      <option value="specialty-finishes" className="text-neutral-900">Specialty Finishes</option>
                      <option value="multiple-properties" className="text-neutral-900">Multiple Properties</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                      Desired Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors text-white"
                    >
                      <option value="" className="text-neutral-900">Select timeline</option>
                      <option value="asap" className="text-neutral-900">ASAP</option>
                      <option value="1-month" className="text-neutral-900">Within 1 Month</option>
                      <option value="2-3-months" className="text-neutral-900">2-3 Months</option>
                      <option value="flexible" className="text-neutral-900">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors text-white placeholder-white/60 resize-vertical"
                    placeholder="Describe your painting project, including size, specific requirements, and any challenges you anticipate..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-white text-neutral-800 py-4 px-8 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-100 rounded-lg"
                  >
                    Request Paint Management Quote
                  </button>
                  <p className="text-xs text-white/70 mt-3 text-center">
                    We'll review your project and provide a detailed management proposal within 24 hours.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-100 p-12 rounded-lg"
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6 text-neutral-900">
                Ready for Professional Paint Management?
              </h2>
              <p className="text-xl mb-8 text-neutral-600 leading-relaxed">
                Let us handle every detail of your painting project while you focus on what matters most. 
                From initial planning to final walkthrough, we ensure exceptional results every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+18183832527"
                  className="bg-neutral-800 text-white px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-900 inline-flex items-center justify-center space-x-2"
                >
                  <span>Call (818) 383-2527</span>
                </a>
                <Link 
                  href="/contact"
                  className="border border-neutral-800 text-neutral-800 px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-800 hover:text-white inline-flex items-center justify-center"
                >
                  <span>Get Consultation</span>
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
