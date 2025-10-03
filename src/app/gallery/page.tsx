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
    category: 'Roman Clay',
    title: 'Luxury Residential Interior',
    description: 'Clay-based, knife-applied plaster finish creating a subtle modern/rustic look and feel',
    before: '/gallery/interior-before-1.jpg',
    after: '/gallery/interior-after-1.jpg',
    featured: true
  },
  {
    id: 2,
    category: 'Limewash',
    title: 'Historic Home Restoration',
    description: 'Traditional limewash application preserving authentic character while providing modern protection',
    before: '/gallery/exterior-before-1.jpg',
    after: '/gallery/exterior-after-1.jpg',
    featured: true
  },
  {
    id: 3,
    category: 'Venetian Plaster',
    title: 'Designer Feature Wall',
    description: 'Hand-applied Venetian plaster creating depth, texture, and beauty that transforms ordinary walls',
    before: '/gallery/cabinet-before-1.jpg',
    after: '/gallery/cabinet-after-1.jpg',
    featured: false
  },
  {
    id: 4,
    category: 'Micro-cement',
    title: 'Contemporary Bathroom Finish',
    description: 'Sleek micro-cement application for modern living with seamless, waterproof surface',
    before: '/gallery/plaster-before-1.jpg',
    after: '/gallery/plaster-after-1.jpg',
    featured: false
  },
  {
    id: 5,
    category: 'Architectural Coatings',
    title: 'Commercial Project',
    description: 'Professional-grade architectural coatings designed for performance and longevity',
    before: '/gallery/commercial-before-1.jpg',
    after: '/gallery/commercial-after-1.jpg',
    featured: false
  },
  {
    id: 6,
    category: 'Interior Painting',
    title: 'Complete Home Transformation',
    description: 'Premium interior painting with architectural finishes that tell their own stories',
    before: '/gallery/handyman-before-1.jpg',
    after: '/gallery/handyman-after-1.jpg',
    featured: false
  },
  {
    id: 7,
    category: 'Exterior Painting',
    title: 'Coastal Property Refresh',
    description: 'Durable exterior finishes designed to communicate with the environment',
    before: '/gallery/exterior-before-2.jpg',
    after: '/gallery/exterior-after-2.jpg',
    featured: false
  },
  {
    id: 8,
    category: 'Cabinet Refinishing',
    title: 'Kitchen Cabinet Transformation',
    description: 'Professional cabinet refinishing creating surfaces that are statements of style',
    before: '/gallery/cabinet-before-2.jpg',
    after: '/gallery/cabinet-after-2.jpg',
    featured: false
  }
]

const categories = ['All', 'Roman Clay', 'Limewash', 'Venetian Plaster', 'Micro-cement', 'Architectural Coatings', 'Interior Painting', 'Exterior Painting', 'Cabinet Refinishing']

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
                <p className="text-xs text-stone-600">Before</p>
              </div>
            </div>
            <div className="absolute top-2 left-2 px-2 py-1 bg-stone-800/80 rounded text-xs text-white">
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
                <p className="text-xs text-stone-600">After</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 px-2 py-1 bg-warm-600/90 rounded text-xs text-white">
              AFTER
            </div>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-center pb-4">
          <span className="text-stone-900 font-medium">Click to View Details</span>
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
        <h3 className="font-semibold text-stone-900 group-hover:text-warm-700 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-body leading-relaxed">
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
    <main className="min-h-screen relative portola-gradient">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 texture-overlay" />
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
                  <span className="text-stone-900">Project </span>
                  <span className="text-gradient-earth">Gallery</span>
                </h1>
                <p className="text-xl text-body mb-8 max-w-4xl mx-auto leading-relaxed">
                  Walls are the soul of the architectural story. See how our specialty finishes create 
                  depth, texture, and beauty that transform ordinary walls into rooms that tell stories. 
                  Each technique is rooted in tradition yet designed for modern living.
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
                      ? 'portola-button text-white elegant-shadow'
                      : 'elegant-card text-stone-700 hover:text-stone-900 hover:bg-stone-100/50'
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
                <p className="text-muted text-lg">No projects found in this category.</p>
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
                Ready to Start Your Story?
              </h2>
              <p className="text-xl text-body mb-8 leading-relaxed">
                Let us help you compose spaces where beauty lives and lasts. 
                Every architectural story begins with a conversation.
              </p>
              <button
                onClick={() => window.location.href = 'tel:+18183832527'}
                className="group portola-button px-12 py-4"
              >
                <span className="font-semibold">Get Your Free Consultation</span>
              </button>
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
                <p className="text-body text-lg">{selectedItem.description}</p>
                
                {/* Placeholder for detailed project info */}
                <div className="glass bg-white/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-pink-400 font-medium">Service Type:</span>
                      <span className="text-body ml-2">{selectedItem.category}</span>
                    </div>
                    <div>
                      <span className="text-pink-400 font-medium">Timeline:</span>
                      <span className="text-body ml-2">2-3 days</span>
                    </div>
                    <div>
                      <span className="text-pink-400 font-medium">Location:</span>
                      <span className="text-body ml-2">Sherman Oaks, CA</span>
                    </div>
                    <div>
                      <span className="text-pink-400 font-medium">Year:</span>
                      <span className="text-body ml-2">2024</span>
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
