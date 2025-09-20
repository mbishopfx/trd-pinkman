"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'

const galleryItems = [
  {
    id: 1,
    category: 'Interior Painting',
    title: 'Modern Living Room Transformation',
    description: 'Complete interior repaint with accent wall and crown molding',
    before: '/gallery/interior-before-1.jpg',
    after: '/gallery/interior-after-1.jpg',
    featured: true
  },
  {
    id: 2,
    category: 'Exterior Painting',
    title: 'Stucco Home Refresh',
    description: 'Full exterior stucco painting with trim and fascia work',
    before: '/gallery/exterior-before-1.jpg',
    after: '/gallery/exterior-after-1.jpg',
    featured: true
  },
  {
    id: 3,
    category: 'Cabinet Refinishing',
    title: 'Kitchen Cabinet Makeover',
    description: 'Professional spray finish cabinet refinishing',
    before: '/gallery/cabinet-before-1.jpg',
    after: '/gallery/cabinet-after-1.jpg',
    featured: false
  },
  {
    id: 4,
    category: 'Venetian Plaster',
    title: 'Luxury Feature Wall',
    description: 'Hand-troweled Venetian plaster with marble-like finish',
    before: '/gallery/plaster-before-1.jpg',
    after: '/gallery/plaster-after-1.jpg',
    featured: false
  },
  {
    id: 5,
    category: 'Commercial Painting',
    title: 'Office Space Renovation',
    description: 'Modern office painting with brand colors',
    before: '/gallery/commercial-before-1.jpg',
    after: '/gallery/commercial-after-1.jpg',
    featured: false
  },
  {
    id: 6,
    category: 'Handyman Services',
    title: 'Complete Home Repair',
    description: 'Drywall repair, trim work, and touch-up painting',
    before: '/gallery/handyman-before-1.jpg',
    after: '/gallery/handyman-after-1.jpg',
    featured: false
  }
]

const categories = ['All', 'Interior Painting', 'Exterior Painting', 'Cabinet Refinishing', 'Venetian Plaster', 'Commercial Painting', 'Handyman Services']

const GalleryItem = ({ item, index, onClick }: { item: any, index: number, onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group cursor-pointer"
    onClick={onClick}
  >
    <div className="glass-card p-4 hover:glow-pink transition-all duration-500 hover:scale-105">
      
      {/* Before/After Images */}
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-2">
          
          {/* Before Image */}
          <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
                <p className="text-xs text-white/60">Before</p>
              </div>
            </div>
            <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 rounded text-xs text-white">
              BEFORE
            </div>
          </div>

          {/* After Image */}
          <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <p className="text-xs text-white/60">After</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 px-2 py-1 bg-pink-500/80 rounded text-xs text-white">
              AFTER
            </div>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-center pb-4">
          <span className="text-white font-medium">Click to View Details</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-pink-400 bg-pink-500/20 px-2 py-1 rounded">
            {item.category}
          </span>
          {item.featured && (
            <span className="text-xs font-medium text-yellow-400 bg-yellow-500/20 px-2 py-1 rounded">
              FEATURED
            </span>
          )}
        </div>
        <h3 className="font-semibold text-white group-hover:text-pink-300 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  </motion.div>
)

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

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
                  <span className="text-white">Project </span>
                  <span className="text-gradient-pink">Gallery</span>
                </h1>
                <p className="text-xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed">
                  See the transformation difference our meticulous prep-first process makes. 
                  From interior refreshes to complete exterior makeovers, every project showcases 
                  our commitment to quality craftsmanship.
                </p>
              </motion.div>
            </div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'glass-button text-white glow-pink'
                      : 'glass text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <GalleryItem
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-white/60 text-lg">No projects found in this category.</p>
              </div>
            )}
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
                Ready for Your Transformation?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let's discuss your project and create something amazing together. 
                Every project starts with a free consultation.
              </p>
              <Button
                variant="gradient"
                size="xl"
                onClick={() => window.location.href = 'tel:+18183832527'}
                className="group"
              >
                <span className="font-bold">Get Your Free Consultation</span>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modal for Selected Item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gradient-pink">{selectedItem.title}</h2>
                  <p className="text-pink-400">{selectedItem.category}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="space-y-6">
                <p className="text-white/80 text-lg">{selectedItem.description}</p>
                
                {/* Placeholder for detailed project info */}
                <div className="glass bg-white/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-pink-400 font-medium">Service Type:</span>
                      <span className="text-white/80 ml-2">{selectedItem.category}</span>
                    </div>
                    <div>
                      <span className="text-pink-400 font-medium">Timeline:</span>
                      <span className="text-white/80 ml-2">2-3 days</span>
                    </div>
                    <div>
                      <span className="text-pink-400 font-medium">Location:</span>
                      <span className="text-white/80 ml-2">Sherman Oaks, CA</span>
                    </div>
                    <div>
                      <span className="text-pink-400 font-medium">Year:</span>
                      <span className="text-white/80 ml-2">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  )
}
