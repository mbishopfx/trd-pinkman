"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const finishes = [
  {
    id: 1,
    classification: "Designer finishes",
    title: "Limewash",
    description: "The beauty of the roman empire, coveted by designers as a wall covering for centuries for its velvety matte texture and luminous depth. Perfect for modern spaces seeking classic charm, crafted elegance made attainable.",
    image: "/pinkman2.png",
    href: "/offerings/limewash",
    reverse: false
  },
  {
    id: 2,
    classification: "Designer finishes", 
    title: "Roman Clay",
    description: "An homage to ancient techniques, applied by hand with trowels to create a velvety, matte-suede finish. Smooth to the touch yet rich with movement, these clays bring depth, warmth, and a soft luminosity to walls. Whether Roman or Moroccan, the effect is timeless — a refined surface that balances old-world artistry with modern sophistication.",
    image: "/pinkmanreal1.png",
    href: "/offerings/roman-clay-plaster",
    reverse: true
  },
  {
    id: 3,
    classification: "Designer finishes",
    title: "Venetian plaster", 
    description: "Born from limestone and marble, Venetian plaster has adorned walls since antiquity with its polished, mirror-like sheen. Applied by hand in delicate layers, the finish breathes with the stone itself, creating a surface that is luminous, natural, and enduring. Both sculptural and refined, it transforms walls into living stone — a statement of timeless elegance and artistry.",
    image: "/pinkman4.png",
    href: "/offerings/venetian-plaster",
    reverse: false
  },
  {
    id: 4,
    classification: "Designer finishes",
    title: "Micro-cement",
    description: "A modern interpretation of the ancient Tadelakt tradition, micro-cement creates seamless, waterproof plaster finishes ideal for wet areas. Applied continuously across showers, bathrooms, walls, and floors, it delivers both durability and design — smooth, elegant, and resistant to water. More than functional, this finish turns utilitarian spaces into sculpted environments of understated luxury.",
    image: "/pinkmanreal.png", 
    href: "/offerings/micro-cement",
    reverse: true
  },
  {
    id: 5,
    classification: "Kitchen Cabinet Refinishing",
    title: "Kitchen Cabinet Refinishing",
    description: "Why replace when you can transform? We deliver a true factory finish onsite, bringing existing cabinetry to life for a fraction of the replacement cost. Using premium catalyzed (2-component) polyurethane systems from brands like Renner and Centurion, our refinishing offers exceptional clarity, hardness, and longevity. The result: cabinets that look and perform as if newly built — elegant, resilient, and tailored to your space.",
    image: "/pinkmanreal1.png",
    href: "/offerings/cabinet-refinishing",
    reverse: false
  }
]

export function FinishesShowcase() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {finishes.map((finish, index) => (
          <motion.div
            key={finish.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32 ${
              index === finishes.length - 1 ? 'mb-0' : ''
            }`}
          >
            
            {/* Image */}
            <div className={`order-1 ${finish.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-lg overflow-hidden group">
                <Image
                  src={finish.image}
                  alt={finish.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className={`order-2 ${finish.reverse ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
              
              {/* Classification */}
              <div>
                <span className="text-xs sm:text-sm tracking-widest text-neutral-500 font-medium uppercase">
                  {finish.classification}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display text-neutral-900 leading-tight">
                {finish.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                {finish.description}
              </p>

              {/* CTA Link */}
              <Link 
                href={finish.href}
                className="inline-flex items-center space-x-3 group"
              >
                <span className="text-sm sm:text-base font-medium text-neutral-800 tracking-wide group-hover:text-neutral-900 transition-colors">
                  VIEW THE COLLECTION
                </span>
                <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>
        ))}
        
      </div>
    </section>
  )
}
