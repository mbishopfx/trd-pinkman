"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Award, Users, Clock, Shield, CheckCircle, Phone, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { testimonials } from '@/lib/utils'

const values = [
  {
    icon: <Award className="w-8 h-8 text-warm-600" />,
    title: "Quality Craftsmanship",
    description: "Every project receives meticulous attention to detail, from initial prep to final touch-ups."
  },
  {
    icon: <Users className="w-8 h-8 text-sage-600" />,
    title: "Customer-Focused",
    description: "We prioritize clear communication, punctual service, and exceeding expectations on every job."
  },
  {
    icon: <Clock className="w-8 h-8 text-warm-600" />,
    title: "Reliable Service",
    description: "Consistent scheduling, professional crews, and projects completed on time and within budget."
  },
  {
    icon: <Shield className="w-8 h-8 text-sage-600" />,
    title: "Licensed & Insured",
    description: "Fully licensed, insured, and bonded for your peace of mind on every project."
  }
]

const stats = [
  { number: "4.8/5", label: "Google Rating", icon: <Star className="w-6 h-6 text-amber-600 fill-current" /> },
  { number: "33+", label: "Happy Customers", icon: <Users className="w-6 h-6 text-warm-600" /> },
  { number: "7", label: "Service Categories", icon: <Award className="w-6 h-6 text-sage-600" /> },
  { number: "100%", label: "Satisfaction Rate", icon: <CheckCircle className="w-6 h-6 text-sage-600" /> }
]

const teamMembers = [
  {
    name: "James",
    role: "Quality-Focused Craftsman",
    description: "A man on a mission to defy the odds and exceed expectations both professionally and personally. With an eye for quality, he does not stop until it's done right, with quality as his number #1 focus. An entrepreneur at heart, James has big plans to run his own business someday while serving his community.",
    expertise: ["Quality Control", "Professional Painting", "Customer Excellence"],
    image: "/james.jpg",
    fun_fact: "In his spare time, he is an avid drummer, laying down the 2's and 4's."
  },
  {
    name: "Tristan Casadei",
    role: '"Big Energy" - Job Site Artist',
    description: "Tristan is the big great energy on the job site. If you catch him not smiling, snap a photo, because I've never seen it. His enthusiasm carries over into his work, as he is passionate about turning your space into a beautiful work of art. At The Pink Guy we don't just see a bland project, we see an opportunity to transform the space into exactly what is desired.",
    expertise: ["Artistic Vision", "Space Transformation", "Positive Energy"],
    image: "/tristan.jpeg",
    fun_fact: "In his spare time, he is a licensed traveling massage therapist and an e-commerce entrepreneur."
  },
  {
    name: "Joshua Ray",
    role: "Handyman Extraordinaire",
    description: "Josh handles the bulk of our in-home service calls, and let me tell you, he is one of the most delightful gentlemen you could have in your home. Josh is one of the most professional, polite and courteous individuals I've ever worked with, and you will find him to be a great conversationalist. His problem-solving skills are the center of his skillset, and he always ensures that the project is done correct.",
    expertise: ["TV Mounting & Hanging", "Furniture Assembly", "Installation Services", "Small Home Repairs"],
    image: "/josh.jpeg",
    fun_fact: "He's also a comedic actor, so laughter is ripe in the air when Josh is around.",
    specialty: "Josh specializes in mounting, hanging, installation, assembling furniture, and all the small needs you have around your home."
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen relative portola-gradient">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 texture-overlay" />
      </div>

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
            <Link href="/" className="inline-flex items-center space-x-2 text-warm-600 hover:text-warm-700 transition-colors group">
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
              <h1 className="text-4xl lg:text-6xl text-display mb-6">
                <span className="text-stone-900">About </span>
                <span className="text-gradient-earth">The Pink Guy</span>
              </h1>
              <p className="text-xl text-body mb-8 max-w-4xl mx-auto leading-relaxed">
                Architectural finishes that tell their own stories. Premium painting services, specialty finishes, 
                and handyman repairs across Sherman Oaks, Encino, and Los Angeles.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="h-full elegant-card">
                    <CardContent className="pt-6 flex flex-col items-center">
                      <div className="mb-4">
                        {stat.icon}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gradient-earth mb-2">
                        {stat.number}
                      </h3>
                      <p className="text-body font-medium">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                <h2 className="text-3xl lg:text-4xl text-display mb-4">
                  <span className="text-stone-900">Our </span>
                  <span className="text-gradient-earth">Values</span>
                </h2>
                <p className="text-xl text-body max-w-3xl mx-auto">
                  The principles that guide every project and interaction
                </p>
              </motion.div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:elegant-shadow transition-all duration-300 elegant-card">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 rounded-lg elegant-card bg-warm-100/50 flex items-center justify-center">
                          {value.icon}
                        </div>
                        <CardTitle className="text-xl text-display text-stone-900">
                          {value.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-body text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                <h2 className="text-3xl lg:text-4xl text-display mb-4">
                  <span className="text-stone-900">Meet Our </span>
                  <span className="text-gradient-earth">Team</span>
                </h2>
                <p className="text-xl text-body max-w-3xl mx-auto">
                  The skilled professionals who bring passion and precision to every project
                </p>
              </motion.div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:elegant-shadow transition-all duration-300 elegant-card">
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-warm-200/50">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl text-display text-stone-900">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-warm-600 font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-body text-sm leading-relaxed">
                        {member.description}
                      </p>
                      
                      <div>
                        <h4 className="text-warm-700 font-semibold text-sm mb-2">Areas of Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-warm-50 text-warm-700 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-warm-100 pt-4">
                        <p className="text-body text-xs italic">
                          <strong>Fun fact:</strong> {member.fun_fact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl text-display mb-4">
                  <span className="text-stone-900">What Clients </span>
                  <span className="text-gradient-earth">Say</span>
                </h2>
                <p className="text-xl text-body max-w-3xl mx-auto">
                  Hear from homeowners who experienced our architectural finishes
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full elegant-card">
                    <CardContent className="pt-6">
                      {/* Stars */}
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-600 fill-current" />
                        ))}
                      </div>

                      {/* Review */}
                      <blockquote className="text-body text-sm mb-4 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-warm-500 to-warm-600 flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-stone-900">
                            {testimonial.name}
                          </p>
                          <p className="text-muted text-xs">
                            Verified Customer
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
              className="portola-card"
            >
              <h2 className="text-3xl lg:text-4xl text-display text-gradient-earth mb-6">
                Ready to Experience The Pink Guy Difference?
              </h2>
              <p className="text-xl text-body mb-8 leading-relaxed">
                Let our skilled team transform your space with architectural finishes that tell your story. 
                Every project starts with a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = 'tel:+18183832527'}
                  className="portola-button px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Call (818) 383-2527</span>
                </button>
                <Link href="/contact">
                  <button className="portola-button-outline px-8 py-4">
                    <span className="font-semibold">Get Free Quote</span>
                  </button>
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