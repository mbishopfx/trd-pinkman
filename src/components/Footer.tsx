"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
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
    <footer className="relative bg-neutral-100 border-t border-neutral-200">
      
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

            <p className="text-neutral-600 mb-6 leading-relaxed">
              Architectural finishes that tell their own stories. Premium painting services and specialty finishes 
              across Sherman Oaks, Encino, and the greater Los Angeles area.
            </p>

            {/* Rating */}
            <div className="elegant-card p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-600 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-bold text-gradient-earth">4.8/5</span>
              </div>
              <p className="text-sm text-body">
                Based on 33+ Google Reviews
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-stone-900 mb-3">Follow Us</h5>
              <div className="flex items-center space-x-3">
                <motion.a
                  href="https://www.facebook.com/CallThePinkGuy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg elegant-card flex items-center justify-center hover:elegant-shadow transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-neutral-600 group-hover:text-neutral-800" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/callthepinkguy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg elegant-card flex items-center justify-center hover:elegant-shadow transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-neutral-600 group-hover:text-neutral-800" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/the-pink-guy-painting"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg elegant-card flex items-center justify-center hover:elegant-shadow transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-neutral-600 group-hover:text-neutral-800" />
                </motion.a>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-gradient-sage font-semibold italic">
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
            <h4 className="text-xl font-bold text-neutral-800 mb-6">
              Get In Touch
            </h4>

            <div className="space-y-4 mb-8">
              
              {/* Phone */}
              <div className="flex items-center space-x-3 group cursor-pointer" onClick={handleCall}>
                <div className="w-12 h-12 rounded-lg elegant-card flex items-center justify-center group-hover:elegant-shadow transition-all duration-300">
                  <Phone className="w-5 h-5 text-warm-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 group-hover:text-warm-700 transition-colors">
                    (818) 383-2527
                  </p>
                  <p className="text-sm text-muted">
                    Call for free consultation
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 group cursor-pointer" onClick={handleEmail}>
                <div className="w-12 h-12 rounded-lg elegant-card flex items-center justify-center group-hover:elegant-shadow transition-all duration-300">
                  <Mail className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 group-hover:text-sage-700 transition-colors break-all">
                    jackson@callthepinkguy.com
                  </p>
                  <p className="text-sm text-muted">
                    Email us anytime
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg elegant-card flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-warm-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900">
                    18034 Ventura Blvd. Suite 242
                  </p>
                  <p className="text-body">
                    Encino, CA 91316
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg elegant-card flex items-center justify-center">
                  <Clock className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900">
                    Mon-Fri: 8AM-5PM
                  </p>
                  <p className="text-body">
                    Sat: By Appointment
                  </p>
                  <p className="text-body">
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
            <h4 className="text-xl font-bold text-neutral-800 mb-6">
              Our Services
            </h4>

            <ul className="space-y-3">
              {[
                { name: 'Interior Painting', href: '/services#interior-painting' },
                { name: 'Exterior Painting', href: '/services#exterior-painting' }, 
                { name: 'Commercial Painting', href: '/services#commercial-painting' },
                { name: 'Cabinet Refinishing', href: '/services#cabinet-refinishing' },
                { name: 'Lime Wash', href: '/services#lime-wash' },
                { name: 'Venetian Plaster', href: '/services#venetian-plaster' },
                { name: 'Handyman Services', href: '/services#handyman-services' },
                { name: 'Drywall Repair', href: '/services#drywall-repair' }
              ].map((service, idx) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="flex items-center space-x-3 group cursor-pointer hover:no-underline"
                  >
                    <div className="w-2 h-2 bg-neutral-600 rounded-full group-hover:scale-125 group-hover:bg-neutral-800 transition-all" />
                    <span className="text-neutral-600 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all duration-300">
                      {service.name}
                    </span>
                  </Link>
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
            <h4 className="text-xl font-bold text-neutral-800 mb-6">
              Service Areas
            </h4>

            <div className="grid grid-cols-1 gap-2">
              {serviceAreas.slice(0, 12).map((area, idx) => (
                <Link 
                  key={area} 
                  href={`/contact?area=${encodeURIComponent(area)}`}
                  className="flex items-center space-x-2 group hover:no-underline"
                >
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full group-hover:bg-neutral-800 transition-colors" />
                  <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                    {area}
                  </span>
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="flex items-center space-x-2 mt-2 group hover:no-underline"
              >
                <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full group-hover:bg-neutral-800 transition-colors" />
                <span className="text-sm text-neutral-600 group-hover:text-neutral-900 font-medium">
                  + Greater Los Angeles
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-stone-200/50 pt-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-muted text-sm">
                © {currentYear} The Pink Guy Painting LLC. All rights reserved.
              </p>
              <p className="text-stone-400 text-xs mt-1">
                Licensed • Insured • Professional
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center lg:text-right">
              <p className="text-body text-sm mb-2">
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
