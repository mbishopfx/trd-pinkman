"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const teamMembers = [
  {
    id: "james",
    name: "James \"Perfection\" Alvarez",
    title: "Quality Specialist",
    bio: "James is a man on a mission to defy the odds, and exceed expectations both professionally and in his personal. With an eye for quality, he does not stop until it's done right, with the quality his number #1 focus.\n\nAn entrepreneur at heart, James has big plans to run his own business someday while serving his community.\n\nIn his spare time, he is an avid drummer, laying down the 2's and 4's.",
    image: "/james.jpg",
    specialty: "Perfectionist Mindset"
  },
  {
    id: "tristan", 
    name: "Tristan \"Big Energy\" Casadei",
    title: "Creative Craftsman & Entrepreneur",
    bio: "Tristan is the big great energy on the job site. If you catch him not smiling, snap a photo, because I've never seen it. His enthusiasm carries over into his work, as he is passionate about turning your space into a beautiful work of art.\n\nAt the pink guy we don't just see a bland project, we see an opportunity to transform the space into exactly what is desired. To be true artists and craftsmen, not just producers.\n\nIn his spare time, he is a licensed traveling massage therapist, and an e-commerce entrepreneur, so feel free to pick his brain about both.",
    image: "/tristan.jpeg",
    specialty: "Transformative Vision"
  },
  {
    id: "joshua",
    name: "Joshua Ray",
    title: "Handyman Extraordinaire",
    bio: "Josh handles the bulk of our in-home Service calls, and let me tell you, he is one of the most delightful gentleman you could have in your home.\n\nJosh is one of the most professional, polite and courteous individuals I've ever worked with, and you will find him to be a great conversationalist. His problem solving skills are the center of skillset, and he always ensures that the project is done correct. He also a comedic actor, so laughter is ripe in the air when Josh is around.\n\nJosh specializes in mounting, hanging, installation, assembling furniture, and all the small needs you have around your home.",
    image: "/josh.jpeg",
    specialty: "Problem Solving Excellence"
  }
]

const TeamMemberCard = ({ member, index }: { member: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="group"
  >
    <div className="glass-card p-6 lg:p-8 h-full hover:glow-pink transition-all duration-500 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Member Photo */}
      <div className="relative mb-6 flex justify-center">
        <div className="relative group/image">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full opacity-60 group-hover/image:opacity-100 blur transition-all duration-300" />
          <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <Image
              src={member.image}
              alt={member.name}
              width={128}
              height={128}
              className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-gradient-pink transition-all duration-300">
          {member.name}
        </h3>
        <p className="text-pink-400 font-semibold text-sm lg:text-base mb-2">
          {member.title}
        </p>
        
        {/* Specialty Badge */}
        <div className="inline-flex items-center space-x-1 glass-card px-3 py-1 mb-4">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-xs text-white/80 font-medium">
            {member.specialty}
          </span>
        </div>
      </div>

      {/* Bio */}
      <div className="text-sm lg:text-base text-white/80 leading-relaxed">
        {member.bio.split('\n\n').map((paragraph: string, idx: number) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 + idx * 0.1 }}
            className="mb-4 last:mb-0"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>
    </div>
  </motion.div>
)

export function TeamSection() {
  return (
    <section className="py-16 lg:py-24 relative" id="team">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.3) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }} />
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
              <span className="text-white">Meet The </span>
              <span className="text-gradient-pink">Painters</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team brings passion, expertise, and personality to every project. 
              Get to know the craftsmen who will transform your space.
            </p>
            
            {/* Team Values */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Precision', 'Passion', 'Professionalism'].map((value, idx) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card px-4 py-2 hover:glow-pink transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm font-medium text-white/80">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 inline-block">
            <h3 className="text-2xl font-bold text-gradient-pink mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl">
              Experience the difference that passionate craftsmanship makes. 
              Contact us today to schedule your consultation.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="tel:+18183832527" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
              >
                <span>Call (818) 383-2527</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
