"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Phone, Clock, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const serviceAreas = [
  "Downtown Santa Barbara", "Montecito", "Goleta", "Carpinteria", "Summerland", 
  "Hope Ranch", "Mission Canyon", "Riviera", "San Roque", "Mesa",
  "Westside", "Eastside", "Funk Zone", "Upper State", "Foothills"
]

const services = [
  {
    title: "Mediterranean Finishes",
    items: ["Traditional Limewash", "Spanish Revival Coatings", "Stucco Restoration", "Terra Cotta Repairs"]
  },
  {
    title: "Historic Preservation", 
    items: ["Adobe Restoration", "Mission-Style Finishes", "Period-Appropriate Colors", "Heritage Coatings"]
  },
  {
    title: "Coastal Protection",
    items: ["Salt-Air Resistance", "UV Protection", "Moisture Barriers", "Marine Coatings"]
  },
  {
    title: "Luxury Residences",
    items: ["Roman Clay", "Venetian Plaster", "Custom Millwork", "Designer Finishes"]
  }
]

const testimonials = [
  {
    name: "Patricia S.",
    location: "Montecito",
    rating: 5,
    text: "The limewash finish on our Spanish Colonial is absolutely perfect. It captures the authentic Mediterranean feel we wanted."
  },
  {
    name: "Thomas R.", 
    location: "Santa Barbara",
    rating: 5,
    text: "Incredible craftsmanship on our historic home restoration. They understood the period requirements perfectly."
  },
  {
    name: "Maria L.",
    location: "Carpinteria",
    rating: 5,
    text: "The Roman clay finish in our beach house is stunning and has held up beautifully to the coastal conditions."
  }
]

export default function SantaBarbaraPage() {
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
            <Link href="/locations" className="inline-flex items-center space-x-2 text-neutral-600 hover:text-neutral-800 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Locations</span>
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
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-neutral-600" />
                <span className="text-sm tracking-widest text-neutral-500 font-medium uppercase">
                  Service Area
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-display text-neutral-900">
                Santa <span className="italic">Barbara</span>
              </h1>

              <p className="text-xl text-neutral-600 leading-relaxed">
                Preserving Santa Barbara's Mediterranean heritage with authentic architectural finishes. 
                From historic Montecito estates to coastal homes, we specialize in traditional techniques 
                that honor the region's Spanish Colonial character.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <span className="font-semibold text-neutral-900">5.0/5</span>
                  <span className="text-neutral-600">Rating</span>
                </div>
                <div>
                  <span className="font-semibold text-neutral-900">15+</span>
                  <span className="text-neutral-600 ml-1">Projects</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+18183832527"
                  className="bg-neutral-800 text-white px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-900 inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>(818) 383-2527</span>
                </a>
                <Link 
                  href="/contact?location=santa-barbara"
                  className="border border-neutral-800 text-neutral-800 px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-800 hover:text-white inline-flex items-center justify-center"
                >
                  <span>Get Quote</span>
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
                  src="/pinkmanreal.png"
                  alt="Santa Barbara architectural finishes"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Service Areas */}
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
                  Service <span className="italic">Areas</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Serving the entire Santa Barbara region with heritage-inspired finishes
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-neutral-800 font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
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
                  Heritage <span className="italic">Expertise</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Specialized in preserving and creating Santa Barbara's distinctive architectural character
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-display text-neutral-900">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {service.items.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-neutral-600">{item}</span>
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

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-neutral-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-display mb-4">
                  Santa Barbara <span className="italic">Reviews</span>
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  What our Santa Barbara clients say about our heritage restoration work
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 p-6 rounded-lg"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-white/90 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/70">{testimonial.location}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                Ready to Preserve Santa Barbara's Beauty?
              </h2>
              <p className="text-xl mb-8 text-neutral-600 leading-relaxed">
                From Montecito estates to downtown historic properties, we honor Santa Barbara's 
                architectural heritage with authentic Mediterranean finishes.
              </p>
              
              <div className="flex items-center justify-center space-x-8 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-neutral-600" />
                  <span className="text-neutral-800">Mon-Fri 8AM-5PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-neutral-600" />
                  <span className="text-neutral-800">(818) 383-2527</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+18183832527"
                  className="bg-neutral-800 text-white px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-900 inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <Link 
                  href="/contact?location=santa-barbara"
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
