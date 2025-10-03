"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Phone, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const locations = [
  {
    name: "Los Angeles",
    state: "California",
    description: "Serving the greater Los Angeles area with premium architectural finishes and specialty painting services.",
    highlights: ["Sherman Oaks", "Encino", "Beverly Hills", "Hollywood", "West Hollywood", "Santa Monica"],
    phone: "(818) 383-2527",
    coverage: "Full Service Area",
    testimonials: 15,
    projects: "50+"
  },
  {
    name: "Orange County",
    state: "California", 
    description: "Bringing our expertise in architectural coatings and designer finishes to Orange County communities.",
    highlights: ["Newport Beach", "Irvine", "Anaheim", "Santa Ana", "Huntington Beach", "Laguna Beach"],
    phone: "(818) 383-2527",
    coverage: "Full Service Area",
    testimonials: 8,
    projects: "25+"
  },
  {
    name: "Santa Barbara",
    state: "California",
    description: "Specializing in limewash, Roman clay, and architectural coatings for coastal properties.",
    highlights: ["Downtown Santa Barbara", "Montecito", "Goleta", "Carpinteria", "Summerland"],
    phone: "(818) 383-2527", 
    coverage: "Full Service Area",
    testimonials: 5,
    projects: "15+"
  },
  {
    name: "Springfield",
    state: "Missouri",
    description: "Expanding our architectural finishes and construction services to the Missouri market.",
    highlights: ["Downtown Springfield", "Battlefield", "Republic", "Nixa", "Ozark", "Branson"],
    phone: "(818) 383-2527",
    coverage: "Expanding Service Area",
    testimonials: 3,
    projects: "10+"
  },
  {
    name: "Bentonville",
    state: "Arkansas", 
    description: "Bringing specialty finishes and construction expertise to Northwest Arkansas.",
    highlights: ["Downtown Bentonville", "Rogers", "Fayetteville", "Springdale", "Bella Vista"],
    phone: "(818) 383-2527",
    coverage: "New Service Area",
    testimonials: 2,
    projects: "8+"
  },
  {
    name: "Kansas City",
    state: "Missouri",
    description: "Offering premium painting services and architectural coatings in the Kansas City metro area.",
    highlights: ["Downtown KC", "Overland Park", "Lee's Summit", "Independence", "Blue Springs", "Olathe"],
    phone: "(818) 383-2527",
    coverage: "New Service Area", 
    testimonials: 1,
    projects: "5+"
  }
]

export default function LocationsPage() {
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

          {/* Page Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-display mb-6 text-neutral-900">
                Our <span className="italic">Locations</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Bringing architectural finishes and construction expertise to communities across the United States
              </p>
            </motion.div>
          </div>
        </div>

        {/* Service Areas Overview */}
        <section className="py-16 lg:py-20 bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6">
                Serving Six Major Markets
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                From our California roots to expanding markets in Missouri and Arkansas, 
                we bring the same commitment to quality and architectural excellence wherever we work.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {["California", "Missouri", "Arkansas"].map((state, index) => (
                  <motion.div
                    key={state}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-display text-white/90">{state}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <CardTitle className="text-2xl font-display text-neutral-900 mb-1">
                            {location.name}
                          </CardTitle>
                          <p className="text-neutral-600 font-medium">{location.state}</p>
                        </div>
                        <MapPin className="w-6 h-6 text-neutral-400" />
                      </div>
                      
                      {/* Coverage Badge */}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          location.coverage === "Full Service Area" 
                            ? "bg-green-100 text-green-800"
                            : location.coverage === "Expanding Service Area"
                            ? "bg-blue-100 text-blue-800" 
                            : "bg-orange-100 text-orange-800"
                        }`}>
                          {location.coverage}
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-neutral-600 leading-relaxed">
                        {location.description}
                      </p>

                      {/* Service Highlights */}
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Service Areas Include:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {location.highlights.slice(0, 4).map((area, idx) => (
                            <div key={idx} className="text-sm text-neutral-600">
                              • {area}
                            </div>
                          ))}
                          {location.highlights.length > 4 && (
                            <div className="text-sm text-neutral-500 col-span-2">
                              + {location.highlights.length - 4} more areas
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                        <div className="text-center">
                          <div className="text-lg font-bold text-neutral-900">{location.projects}</div>
                          <div className="text-xs text-neutral-600">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center">
                            <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
                            <span className="text-lg font-bold text-neutral-900">{location.testimonials}</span>
                          </div>
                          <div className="text-xs text-neutral-600">Reviews</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 space-y-3">
                        {/* View Details Button */}
                        {(['Los Angeles', 'Orange County', 'Santa Barbara', 'Springfield'].includes(location.name)) && (
                          <Link 
                            href={`/locations/${location.name.toLowerCase().replace(/\s+/g, '-').replace(',', '')}`}
                            className="w-full bg-neutral-100 text-neutral-800 py-3 px-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-neutral-200 flex items-center justify-center space-x-2"
                          >
                            <span>View Details</span>
                          </Link>
                        )}
                        
                        {/* Contact Button */}
                        <a 
                          href={`tel:${location.phone.replace(/[^\d]/g, '')}`}
                          className="w-full bg-neutral-800 text-white py-3 px-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-neutral-900 flex items-center justify-center space-x-2"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Information */}
        <section className="py-16 lg:py-24 bg-neutral-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6 text-neutral-900">
                Consistent Quality, Local Service
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                No matter which location you're in, you can expect the same high standards of 
                architectural finishes, specialty coatings, and construction expertise that 
                have made The Pink Guy a trusted name.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: "Local Response",
                    description: "Quick response times and local project management in each market"
                  },
                  {
                    icon: <Star className="w-8 h-8" />,
                    title: "Same Standards", 
                    description: "Consistent quality and techniques across all service locations"
                  },
                  {
                    icon: <MapPin className="w-8 h-8" />,
                    title: "Growing Network",
                    description: "Expanding to serve more communities with architectural finishes"
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 text-white rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-display mb-2 text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
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
              className="bg-neutral-800 text-white p-12 rounded-lg"
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Contact us to discuss your architectural finish needs in any of our service areas. 
                Every project starts with understanding your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+18183832527"
                  className="bg-white text-neutral-800 px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-neutral-100 inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (818) 383-2527</span>
                </a>
                <Link 
                  href="/contact"
                  className="border border-white text-white px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-neutral-800 inline-flex items-center justify-center"
                >
                  <span>Get Quote</span>
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
