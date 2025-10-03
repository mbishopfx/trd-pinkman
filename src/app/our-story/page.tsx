"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Quote, Heart, Palette, Home } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'

export default function OurStoryPage() {
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
                Our <span className="italic">Story</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                The pink guy paint and plaster
              </p>
            </motion.div>
          </div>
        </div>

        {/* Dostoevsky Quote Section */}
        <section className="py-16 lg:py-20 bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Quote className="w-12 h-12 mx-auto mb-8 text-white/70" />
              <blockquote className="text-2xl lg:text-3xl font-display italic mb-8 leading-relaxed">
                "Beauty Will Save the World."
              </blockquote>
              <p className="text-lg text-white/90 mb-12">
                Inspired by Dostoevsky's words. We believe walls aren't just built — they're composed. 
                Through architectural coatings, designer finishes, and construction expertise, 
                we shape spaces where beauty lives and lasts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-display mb-6 text-neutral-900">
                  Walls are the soul of the architectural story
                </h2>
                
                <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                  <p>
                    At The Pink Guy, we see every wall as a canvas waiting to tell a story. 
                    Our specialty finishes don't just cover surfaces — they transform spaces 
                    into living narratives that reflect the soul of those who inhabit them.
                  </p>
                  
                  <p>
                    From hand-applied limewash that breathes with natural texture to refined 
                    Roman clays that echo ancient craftsmanship, each technique we employ is 
                    rooted in tradition yet designed for modern living. We create depth, 
                    texture, and beauty that transform ordinary walls into rooms that tell stories.
                  </p>
                  
                  <p>
                    Every project begins with understanding your vision, your story, and your 
                    space. Because we believe that true craftsmanship isn't just about technique 
                    — it's about composing environments where beauty lives and lasts.
                  </p>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="/pinkmanreal1.png"
                    alt="Beautiful architectural finish work"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24 bg-neutral-100">
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
                  Our <span className="italic">Approach</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Walls are more than surfaces — they're statements
                </p>
              </motion.div>
            </div>

            {/* Approach Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Palette className="w-8 h-8" />,
                  title: "Artisanal Mastery",
                  description: "Our specialty finishes include hand-applied limewash, refined Roman and Moroccan clays, polished Venetian plaster, sleek micro-cement, and durable waterproof plasters."
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Tradition Meets Modern",
                  description: "Each technique is rooted in tradition yet designed for modern living, creating depth, texture, and beauty that transform ordinary walls into rooms that tell stories."
                },
                {
                  icon: <Home className="w-8 h-8" />,
                  title: "Composed Spaces",
                  description: "We don't just build walls — we compose them. Through architectural coatings, designer finishes, and construction expertise, we shape spaces where beauty lives and lasts."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-neutral-800 text-white rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-display mb-4 text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16 lg:py-24 bg-white">
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
                  Meet Our <span className="italic">Team</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  The artisans and craftsmen behind every beautiful finish
                </p>
              </motion.div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Main Owner - Featured */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 lg:row-span-1"
              >
                <Card className="h-full bg-neutral-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-neutral-200 group-hover:ring-neutral-300 transition-all duration-300">
                      <Image
                        src="/headshot.png"
                        alt="Founder and Lead Craftsman"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-display mb-2 text-neutral-900">
                      The Pink Guy
                    </h3>
                    <p className="text-lg text-neutral-600 mb-4 font-medium">
                      Founder & Lead Craftsman
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                      Visionary behind The Pink Guy's philosophy of "Beauty Will Save the World." 
                      With years of expertise in specialty finishes and architectural coatings, 
                      he leads every project with passion for transforming spaces through artisanal craftsmanship.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Team Member - Tristan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-neutral-200 group-hover:ring-neutral-300 transition-all duration-300">
                      <Image
                        src="/tristan.jpeg"
                        alt="Tristan - Master Craftsman"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-display mb-2 text-neutral-900">
                      Tristan
                    </h3>
                    <p className="text-neutral-600 mb-3 font-medium">
                      Master Craftsman
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Specialist in Venetian plaster and Roman clay applications. 
                      Tristan brings precision and artistry to every finish.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Team Member - James */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-neutral-200 group-hover:ring-neutral-300 transition-all duration-300">
                      <Image
                        src="/james.jpg"
                        alt="James - Project Specialist"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-display mb-2 text-neutral-900">
                      James
                    </h3>
                    <p className="text-neutral-600 mb-3 font-medium">
                      Project Specialist
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Expert in limewash and micro-cement applications. 
                      James ensures every project meets our exacting standards.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Team Member - Josh */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:col-start-2 lg:col-start-auto"
              >
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-neutral-200 group-hover:ring-neutral-300 transition-all duration-300">
                      <Image
                        src="/josh.jpeg"
                        alt="Josh - Finish Artisan"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-display mb-2 text-neutral-900">
                      Josh
                    </h3>
                    <p className="text-neutral-600 mb-3 font-medium">
                      Finish Artisan
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Skilled in cabinet refinishing and architectural coatings. 
                      Josh brings attention to detail to every surface.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Team Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <div className="max-w-4xl mx-auto bg-neutral-50 p-8 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-neutral-900">
                  United by Craftsmanship
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Our team shares a passion for transforming spaces through artisanal finishes. 
                  Each member brings unique expertise, but we're all united by our commitment to 
                  creating walls that tell stories and spaces where beauty lives and lasts.
                </p>
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
                Ready to Start Your Story?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Let us help you compose spaces where beauty lives and lasts. 
                Every architectural story begins with a conversation.
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
                  <span>Start Your Story</span>
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
