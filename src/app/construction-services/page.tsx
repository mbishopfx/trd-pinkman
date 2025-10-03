"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, HardHat, Users, CheckCircle, Clock, Shield, Wrench, Building, Palette, Layers } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { saveLead } from '@/lib/supabase'

const services = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "General Contracting",
    description: "Full-scale construction management from concept to completion, including permits, scheduling, and coordination of all trades.",
    features: ["Project Planning", "Permit Acquisition", "Trade Coordination", "Quality Control"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Project Management",
    description: "Comprehensive project oversight ensuring timelines, budgets, and quality standards are met on every construction project.",
    features: ["Timeline Management", "Budget Control", "Vendor Relations", "Progress Reporting"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Specialty Finishes Integration",
    description: "Seamlessly incorporating our architectural finishes and specialty coatings into larger construction projects.",
    features: ["Limewash Application", "Roman Clay Finishes", "Venetian Plaster", "Micro-cement Installation"]
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Design-Build Services",
    description: "Integrated approach combining design expertise with construction capability for streamlined project delivery.",
    features: ["Conceptual Design", "Material Selection", "Construction Planning", "Value Engineering"]
  }
]

const capabilities = [
  {
    category: "Residential Construction",
    services: ["Custom Home Building", "Home Additions", "Kitchen & Bath Remodels", "Architectural Finish Integration"],
    description: "From luxury custom homes to sophisticated remodels featuring our specialty architectural finishes."
  },
  {
    category: "Commercial Projects", 
    services: ["Office Build-Outs", "Retail Spaces", "Restaurant Construction", "Hospitality Projects"],
    description: "Commercial construction with emphasis on architectural finishes that create memorable spaces."
  },
  {
    category: "Specialty Construction",
    services: ["Historic Restoration", "Luxury Finishes", "Custom Millwork", "Artisan Craftsmanship"],
    description: "Specialized construction requiring artisan-level skill and attention to architectural detail."
  }
]

const projectProcess = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We begin with understanding your vision, requirements, and project goals through detailed consultation."
  },
  {
    step: "02", 
    title: "Design & Planning",
    description: "Our team develops comprehensive plans, obtains permits, and coordinates all project logistics."
  },
  {
    step: "03",
    title: "Construction Management",
    description: "Professional oversight of all trades, timeline management, and quality control throughout construction."
  },
  {
    step: "04",
    title: "Finish Application",
    description: "Integration of our specialty architectural finishes to create truly unique and beautiful spaces."
  },
  {
    step: "05",
    title: "Project Completion",
    description: "Final walkthrough, quality assurance, and ongoing support to ensure complete satisfaction."
  }
]

export default function ConstructionServicesPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    timeline: '',
    budget: '',
    services: [] as string[],
    description: '',
    referral: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Prepare lead data
      const leadData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        location: formData.location,
        timeline: formData.timeline,
        budget: formData.budget,
        services: formData.services,
        description: formData.description,
        referral: formData.referral,
        source_page: '/construction-services',
        form_type: 'project-management-inquiry'
      }

      // Save to Supabase
      await saveLead(leadData)

      // Send email notification
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        })

        if (!response.ok) {
          console.error('Failed to send email notification')
        }
      } catch (emailError) {
        console.error('Error sending email:', emailError)
        // Don't fail the form submission if email fails
      }

      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          projectType: '',
          location: '',
          timeline: '',
          budget: '',
          services: [],
          description: '',
          referral: ''
        })
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }
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
                Construction <span className="italic">Services</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                From project management to full general contracting - expanding our capabilities 
                to serve complete construction needs while maintaining our architectural finish expertise.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Overview */}
        <section className="py-16 lg:py-20 bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6">
                Expanding Into General Contracting
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Building on our reputation for exceptional architectural finishes, we're expanding to offer 
                comprehensive construction services. Our unique combination of artisan-level finish work 
                and professional construction management creates truly exceptional projects.
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
                  Our <span className="italic">Services</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Comprehensive construction capabilities backed by unmatched expertise in architectural finishes
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

        {/* Project Capabilities */}
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
                  Project <span className="italic">Capabilities</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  From residential remodels to commercial construction - all with our signature attention to finish detail
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl font-display text-neutral-900 mb-4">
                        {capability.category}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {capability.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Services Include:</h4>
                        <div className="space-y-2">
                          {capability.services.map((service, idx) => (
                            <div key={idx} className="text-sm text-neutral-600">
                              • {service}
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
                  Our <span className="italic">Process</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  A systematic approach that combines construction expertise with architectural finish artistry
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {projectProcess.map((step, index) => (
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

        {/* Construction Management Section */}
        <section className="py-16 lg:py-24 bg-neutral-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6 text-neutral-900">
                Construction <span className="italic">Management</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                The hardest part of building isn't always the labor — it's finding the right leadership. 
                Great project managers and general contractors are rare, and that's where we step in. 
                We provide owner's rep services and continue to expand into a full spectrum of construction 
                management solutions. Whether your project is large or small, if you need trusted guidance, 
                just ask — odds are, we can help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-8">
                Why Choose The Pink Guy for Construction?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: <HardHat className="w-8 h-8" />,
                    title: "Unique Expertise",
                    description: "Combining construction management with unmatched architectural finish expertise"
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Quality Assurance",
                    description: "The same attention to detail that makes our finishes exceptional applies to all construction"
                  },
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: "Integrated Approach",
                    description: "Seamless integration of specialty finishes eliminates coordination issues between trades"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-display mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Management Form */}
        <section className="py-16 lg:py-24 bg-neutral-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6 text-neutral-900">
                Project Management <span className="italic">Inquiry</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Ready to discuss your construction project? Fill out our form below and we'll connect you 
                with our project management team to explore how we can help bring your vision to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 lg:p-12 rounded-lg shadow-lg"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-neutral-600">
                    We've received your project inquiry and will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
                  placeholder="your@email.com"
                />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
                  placeholder="(555) 123-4567"
                />
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">
                    Project Type *
                  </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
              >
                    <option value="">Select project type</option>
                    <option value="residential-new-construction">Residential New Construction</option>
                    <option value="residential-renovation">Residential Renovation</option>
                    <option value="commercial-new-construction">Commercial New Construction</option>
                    <option value="commercial-renovation">Commercial Renovation</option>
                    <option value="specialty-finishes">Specialty Finishes Project</option>
                    <option value="project-management-only">Project Management Only</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
                      Project Location *
                    </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
                >
                      <option value="">Select location</option>
                      <option value="los-angeles">Los Angeles, CA</option>
                      <option value="orange-county">Orange County, CA</option>
                      <option value="santa-barbara">Santa Barbara, CA</option>
                      <option value="springfield-mo">Springfield, MO</option>
                      <option value="bentonville-ar">Bentonville, AR</option>
                      <option value="kansas-city-mo">Kansas City, MO</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-2">
                      Desired Timeline
                    </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
                >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                    Estimated Budget Range
                  </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
              >
                    <option value="">Select budget range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                {/* Services Needed */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-3">
                    Services Needed (Check all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Project Management",
                      "General Contracting", 
                      "Design Consultation",
                      "Permit Acquisition",
                      "Architectural Finishes",
                      "Interior Painting",
                      "Exterior Painting",
                      "Cabinet Refinishing",
                      "Limewash Application",
                      "Roman Clay/Plaster",
                      "Venetian Plaster",
                      "Micro-cement",
                      "Construction Management",
                      "Timeline Coordination",
                      "Budget Management",
                      "Other"
                    ].map((service) => (
                      <label key={service} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-neutral-600 border-neutral-300 rounded focus:ring-2 focus:ring-neutral-500"
                        />
                        <span className="text-sm text-neutral-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-2">
                    Project Description *
                  </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-colors resize-vertical"
                placeholder="Please describe your project in detail. Include any specific requirements, challenges, or goals you have in mind..."
              ></textarea>
                </div>

                {/* How did you hear about us */}
                <div>
                  <label htmlFor="referral" className="block text-sm font-medium text-neutral-700 mb-2">
                    How did you hear about us?
                  </label>
              <select
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
              >
                    <option value="">Select an option</option>
                    <option value="google-search">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral from friend/family</option>
                    <option value="previous-client">Previous client</option>
                    <option value="online-review">Online reviews</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neutral-800 text-white py-4 px-8 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-900 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}
              </button>
                  <p className="text-xs text-neutral-500 mt-3 text-center">
                    We'll review your inquiry and contact you within 24 hours to discuss your project.
                  </p>
                </div>
              </form>
              )}
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
                Ready to Discuss Your Construction Project?
              </h2>
              <p className="text-xl mb-8 text-neutral-600 leading-relaxed">
                Whether you need full general contracting services or specialized project management 
                with our signature architectural finishes, we're ready to bring your vision to life.
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
