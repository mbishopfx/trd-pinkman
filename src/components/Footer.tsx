"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Star, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { serviceAreas, siteConfig } from '@/lib/utils'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleCall = () => {
    window.location.href = 'tel:+18183832527'
  }

  const handleEmail = () => {
    window.location.href = 'mailto:jackson@callthepinkguy.com'
  }

  return (
    <footer className="relative bg-black/50 backdrop-blur-xl border-t border-white/10">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <div className="mb-6">
              <div className="relative h-10 w-auto mb-4">
                <Image
                  src="/bannerlogo.png"
                  alt="The Pink Guy Painting LLC"
                  width={180}
                  height={40}
                  className="h-full w-auto object-contain filter drop-shadow-lg"
                />
              </div>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">
              Precision‑first painting and dependable handyman repairs across Sherman Oaks, 
              Encino, and the greater Los Angeles area.
            </p>

            {/* Rating */}
            <div className="glass-card p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-bold text-gradient-pink">4.8/5</span>
              </div>
              <p className="text-sm text-white/70">
                Based on 33+ Google Reviews
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex items-center space-x-3">
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-pink transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-pink transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-pink transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
                </motion.a>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-pink-400 font-semibold italic">
              "It's All in the Prep."
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">
              Get In Touch
            </h4>

            <div className="space-y-4 mb-8">
              
              {/* Phone */}
              <div className="flex items-center space-x-3 group cursor-pointer" onClick={handleCall}>
                <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center group-hover:glow-pink transition-all duration-300">
                  <Phone className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-pink-300 transition-colors">
                    (818) 383-2527
                  </p>
                  <p className="text-sm text-white/60">
                    Call for free consultation
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 group cursor-pointer" onClick={handleEmail}>
                <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center group-hover:glow-pink transition-all duration-300">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-pink-300 transition-colors break-all">
                    jackson@callthepinkguy.com
                  </p>
                  <p className="text-sm text-white/60">
                    Email us anytime
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-pink-400" />
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
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center">
                  <Clock className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Mon-Fri: 8AM-5PM
                  </p>
                  <p className="text-white/80">
                    Sat: By Appointment
                  </p>
                  <p className="text-white/80">
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="gradient"
              onClick={handleCall}
              className="w-full group"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              <span className="font-semibold">Call Now</span>
            </Button>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">
              Our Services
            </h4>

            <ul className="space-y-3">
              {[
                'Interior Painting',
                'Exterior Painting', 
                'Commercial Painting',
                'Cabinet Refinishing',
                'Lime Wash',
                'Venetian Plaster',
                'Handyman Services',
                'Drywall Repair'
              ].map((service, idx) => (
                <li key={service} className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full group-hover:scale-125 transition-transform" />
                  <span className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">
              Service Areas
            </h4>

            <div className="grid grid-cols-1 gap-2">
              {serviceAreas.slice(0, 12).map((area, idx) => (
                <div key={area} className="flex items-center space-x-2 group">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full group-hover:bg-pink-300 transition-colors" />
                  <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {area}
                  </span>
                </div>
              ))}
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                <span className="text-sm text-pink-300 font-medium">
                  + Greater Los Angeles
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-sm">
                © {currentYear} The Pink Guy Painting LLC. All rights reserved.
              </p>
              <p className="text-white/50 text-xs mt-1">
                Licensed • Insured • Professional
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center lg:text-right">
              <p className="text-white/70 text-sm mb-2">
                Ready to transform your space?
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCall}
                className="group"
              >
                <span className="font-medium">Get Your Free Quote</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
