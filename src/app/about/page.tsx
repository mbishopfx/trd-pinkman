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
    icon: <Award className="w-8 h-8 text-pink-400" />,
    title: "Quality Craftsmanship",
    description: "Every project receives meticulous attention to detail, from initial prep to final touch-ups."
  },
  {
    icon: <Users className="w-8 h-8 text-pink-400" />,
    title: "Customer-Focused",
    description: "We prioritize clear communication, punctual service, and exceeding expectations on every job."
  },
  {
    icon: <Clock className="w-8 h-8 text-pink-400" />,
    title: "Reliable Service",
    description: "Consistent scheduling, professional crews, and projects completed on time and within budget."
  },
  {
    icon: <Shield className="w-8 h-8 text-pink-400" />,
    title: "Licensed & Insured",
    description: "Fully licensed, insured, and bonded for your peace of mind on every project."
  }
]

const stats = [
  { number: "4.8/5", label: "Google Rating", icon: <Star className="w-6 h-6 text-yellow-400 fill-current" /> },
  { number: "33+", label: "Happy Customers", icon: <Users className="w-6 h-6 text-pink-400" /> },
  { number: "7", label: "Service Categories", icon: <Award className="w-6 h-6 text-pink-400" /> },
  { number: "100%", label: "Satisfaction Rate", icon: <CheckCircle className="w-6 h-6 text-green-400" /> }
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
    image: "/team-headshot.png",
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
    <main className="min-h-screen relative">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 pt-24 lg:pt-28">
        
        {/* Header Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link href="/" className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors group">
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
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">About </span>
                  <span className="text-gradient-pink">The Pink Guy</span>
                </h1>
                <p className="text-xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Your premier Sherman Oaks painting firm, dedicated to precision-first craftsmanship, 
                  honest service, and 100% customer satisfaction. It's all in the prep.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center hover:glow-pink transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gradient-pink mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Story Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  <span className="text-white">Our </span>
                  <span className="text-gradient-pink">Story</span>
                </h2>
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <p>
                    The Pink Guy Painting LLC was founded on a simple principle: <strong className="text-pink-300">
                    "It's All in the Prep."</strong> We believe that every lasting, beautiful finish starts with 
                    meticulous preparation and attention to detail.
                  </p>
                  <p>
                    Based in Sherman Oaks and serving the greater Los Angeles area, we've built our reputation 
                    on precision-first painting and dependable handyman services. From whole-home repaints to 
                    specialty finishes like Venetian plaster and lime wash, we approach every project with the 
                    same level of care and professionalism.
                  </p>
                  <p>
                    Our team takes pride in clean job sites, clear communication, and finishes that last. 
                    Whether it's a single room refresh or a complete exterior transformation, we're committed 
                    to exceeding your expectations.
                  </p>
                </div>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-pink-500/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <p className="text-lg text-white/80 leading-relaxed">
                      To deliver exceptional painting and handyman services through meticulous preparation, 
                      quality materials, and honest craftsmanship that transforms spaces and exceeds expectations.
                    </p>
                    <div className="glass bg-pink-500/10 p-6 rounded-lg">
                      <p className="text-2xl font-bold text-gradient-pink mb-2">
                        "It's All in the Prep"
                      </p>
                      <p className="text-white/70 italic">
                        Our philosophy that drives every project we undertake
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="text-white">Our </span>
                  <span className="text-gradient-pink">Values</span>
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
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
                  <Card className="h-full hover:glow-pink transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 glass-card flex items-center justify-center">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3">
                            {value.title}
                          </h3>
                          <p className="text-white/80 leading-relaxed">
                            {value.description}
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
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="text-white">Meet the </span>
                  <span className="text-gradient-pink">Team</span>
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Professional, experienced, and dedicated to your satisfaction
                </p>
              </motion.div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-2xl font-bold text-white">
                              {member.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gradient-pink mb-2">
                          {member.name}
                        </h3>
                        <p className="text-pink-400 font-medium">
                          {member.role}
                        </p>
                      </div>
                      
                      <p className="text-white/80 mb-4 leading-relaxed text-center">
                        {member.description}
                      </p>

                      {member.fun_fact && (
                        <div className="glass bg-pink-500/10 p-4 rounded-lg mb-4">
                          <p className="text-sm text-pink-300 text-center italic">
                            💫 {member.fun_fact}
                          </p>
                        </div>
                      )}

                      {member.specialty && (
                        <div className="glass bg-blue-500/10 p-4 rounded-lg mb-6">
                          <p className="text-sm text-blue-300 text-center">
                            🔧 {member.specialty}
                          </p>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-white mb-3 text-center">Expertise:</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {member.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm"
                            >
                              {skill}
                            </span>
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

        {/* Testimonials Section */}
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
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="text-white">What Customers </span>
                  <span className="text-gradient-pink">Say</span>
                </h2>
              </motion.div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-white/90 mb-4 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      <footer className="font-semibold text-pink-300">
                        — {testimonial.name}
                      </footer>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 lg:p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-pink mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Experience the difference that meticulous preparation and quality craftsmanship make. 
                Contact us today for your free consultation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  variant="gradient"
                  size="xl"
                  onClick={() => window.location.href = 'tel:+18183832527'}
                  className="group"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  <span className="font-bold">Call (818) 383-2527</span>
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="xl"
                    className="group"
                  >
                    <span className="font-semibold">Get Free Quote</span>
                  </Button>
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
