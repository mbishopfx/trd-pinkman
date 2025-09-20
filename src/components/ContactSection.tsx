"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleCall = () => {
    window.location.href = 'tel:+18183832527'
  }

  const handleEmail = () => {
    window.location.href = 'mailto:callthepinkguy@gmail.com'
  }

  return (
    <section className="py-16 lg:py-24 relative" id="contact">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 via-transparent to-transparent" />
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Get Your Free </span>
              <span className="text-gradient-pink">Consultation</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your space? Contact us today for a personalized estimate 
              and discover why homeowners across LA trust The Pink Guy.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Request Your Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gradient-pink mb-2">
                      Thank You!
                    </h3>
                    <p className="text-white/80">
                      We'll contact you within 24 hours to discuss your project.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone & Service Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                          placeholder="(818) 555-0123"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 bg-white/5 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="interior-painting">Interior Painting</option>
                          <option value="exterior-painting">Exterior Painting</option>
                          <option value="commercial-painting">Commercial Painting</option>
                          <option value="cabinet-refinishing">Cabinet Refinishing</option>
                          <option value="lime-wash">Lime Wash</option>
                          <option value="venetian-plaster">Venetian Plaster</option>
                          <option value="handyman-services">Handyman Services</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none"
                        placeholder="Tell us about your project... rooms, timeline, specific needs, etc."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="font-semibold">Send My Request</span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Prefer to Call?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={handleCall}
                  className="w-full group"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  <span className="font-bold">(818) 383-2527</span>
                </Button>
                <p className="text-white/70 text-center">
                  Get immediate answers to your questions
                </p>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                
                {/* Email */}
                <div className="flex items-center space-x-4 group cursor-pointer" onClick={handleEmail}>
                  <div className="w-12 h-12 rounded-lg glass flex items-center justify-center group-hover:glow-pink transition-all duration-300">
                    <Mail className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-pink-300 transition-colors">
                      callthepinkguy@gmail.com
                    </p>
                    <p className="text-sm text-white/60">
                      Email us anytime
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg glass flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      18034 Ventura Blvd. Suite 242
                    </p>
                    <p className="text-white/80">
                      Encino, CA 91316
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg glass flex items-center justify-center">
                    <Clock className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Mon-Fri: 8AM-5PM
                    </p>
                    <p className="text-white/80">
                      Sat: By Appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Promise */}
            <Card className="border-pink-500/30">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold text-gradient-pink mb-3">
                  Our Promise to You
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free, no-obligation consultations</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Detailed, itemized estimates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
