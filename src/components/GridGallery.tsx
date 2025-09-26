"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    id: 1,
    src: '/pinkman2.png',
    alt: 'Traditional Finishes',
    title: 'Traditional Finishes',
    description: 'Lime-based paints and authentic pigments in a variety of hand-crafted hues for interior and exterior walls.',
    span: 'row-span-2'
  },
  {
    id: 2,
    src: '/pinkman4.png',
    alt: 'Specialty Finishes', 
    title: 'Specialty Finishes',
    description: 'Artisanal finishes that balance color and texture for a look and feel both timeless and modern.',
    span: ''
  },
  {
    id: 3,
    src: '/pinkmanreal.png',
    alt: 'Samples & Accessories',
    title: 'Samples & Accessories', 
    description: 'Everything you need to get started and see how our finishes perform in the real world.',
    span: ''
  },
  {
    id: 4,
    src: '/pinkmanreal1.png',
    alt: 'Roman Clay Collection',
    title: 'Roman Clay',
    description: 'Ideal for smooth interior walls, our clay-based, knife-applied plaster finish gives a subtle modern/rustic look and feel.',
    span: 'col-span-2'
  }
]

export function GridGallery() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-neutral-800 mb-3 sm:mb-4 leading-tight">
            You've never seen this offered to 
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>watch paint dry.
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Our interior and exterior architectural finishes communicate with the environment in which you place them.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group cursor-pointer ${image.span} ${
                image.id === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              } ${image.id === 1 ? 'md:row-span-2' : ''}`}
            >
              <div className="relative overflow-hidden bg-white">
                <div className={`relative ${
                  image.id === 1 
                    ? 'h-64 sm:h-80 md:h-96 lg:h-[500px]' 
                    : image.id === 4 
                      ? 'h-48 sm:h-64 md:h-80 lg:h-96'
                      : 'h-48 sm:h-64 md:h-80 lg:h-96'
                }`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl font-display text-neutral-800 mb-2 md:mb-3">
                    {image.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {image.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 md:mt-6 text-xs sm:text-sm font-medium text-neutral-800 tracking-widest flex items-center group-hover:text-neutral-900 transition-colors"
                  >
                    VIEW THE COLLECTION
                    <span className="ml-2">→</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Roman Clay Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <div className="space-y-4 md:space-y-6 order-2 md:order-1">
            <div>
              <span className="text-xs sm:text-sm tracking-widest text-neutral-500 font-medium">
                SPECIALTY FINISH
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display text-neutral-800 mt-1 md:mt-2">
                Roman Clay
              </h3>
            </div>
            
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Ideal for smooth interior walls, our clay-based, knife-applied plaster finish gives 
              a subtle modern/rustic look and feel, making it perfect for your traditional, old-world 
              or contemporary setting.
            </p>
            
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Communicating with the environment in which you place it, this finish presents a 
              subtle, yet dynamic patina that softens and variegates as it seasons.
            </p>
            
            <button className="bg-neutral-800 hover:bg-neutral-900 text-white px-6 sm:px-8 py-3 text-xs sm:text-sm font-medium tracking-widest transition-colors">
              VIEW THE COLLECTION
            </button>
          </div>
          
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 md:order-2">
            <Image
              src="/pinkmanreal.png"
              alt="Roman Clay finish example"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
