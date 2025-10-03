"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ShoppingCart, User, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/paint-management', label: 'PAINT MANAGEMENT' },
  { href: '/our-story', label: 'OUR STORY' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '/contact', label: 'CONTACT' },
  { href: '/locations', label: 'LOCATIONS' },
]

const offeringsItems = [
  { href: '/offerings/limewash', label: 'Limewash' },
  { href: '/offerings/roman-clay-plaster', label: 'Roman Clay/ Plaster' },
  { href: '/offerings/micro-cement', label: 'Micro-cement' },
  { href: '/offerings/interior-painting', label: 'Interior Painting' },
  { href: '/offerings/cabinet-refinishing', label: 'Cabinet Refinishing' },
  { href: '/offerings/commercial', label: 'Commercial' },
  { href: '/offerings/exterior', label: 'Exterior' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCall = () => {
    window.location.href = 'tel:+18183832527'
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-neutral-800/95 backdrop-blur-md"
            : "bg-neutral-800"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-8 sm:h-10 w-auto"
              >
                <Image
                  src="/bannerlogo.png"
                  alt="The Pink Guy"
                  width={180}
                  height={40}
                  className="h-full w-auto object-contain filter drop-shadow-lg"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
              {/* Offerings Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                className="relative"
                onMouseEnter={() => setIsOfferingsOpen(true)}
                onMouseLeave={() => setIsOfferingsOpen(false)}
              >
                <button className="text-white/90 hover:text-white text-xs font-medium transition-all duration-300 relative group py-2 tracking-wider">
                  OFFERINGS
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </button>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isOfferingsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-neutral-800 border border-white/10 rounded-sm shadow-xl z-50"
                    >
                      <div className="py-2">
                        {offeringsItems.map((item, index) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-xs text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 tracking-wider"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white text-xs font-medium transition-all duration-300 relative group py-2 tracking-wider"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block text-white/90 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:block text-white/90 hover:text-white transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="hidden sm:block text-white/90 hover:text-white transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-neutral-800 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full pt-20 p-6">
                
                {/* Mobile Navigation Items */}
                <div className="flex flex-col space-y-6">
                  {/* Mobile Offerings Section */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0 }}
                  >
                    <div className="text-sm font-medium text-white/90 py-2 tracking-wider">
                      OFFERINGS
                    </div>
                    <div className="ml-4 space-y-3 mt-2">
                      {offeringsItems.map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-xs text-white/70 hover:text-white py-1 tracking-wider transition-all duration-300"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: (index + 1) * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm font-medium text-white/90 hover:text-white py-2 tracking-wider transition-all duration-300"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Call Button */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto pt-8 border-t border-white/10"
                >
                  <button
                    onClick={() => {
                      handleCall()
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-center space-x-3 bg-white text-neutral-800 py-3 px-6 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-neutral-100"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(818) 383-2527</span>
                  </button>

                  <div className="mt-6 text-center">
                    <p className="text-white/60 text-xs tracking-wide">
                      MON-FRI 8AM-5PM
                    </p>
                    <p className="text-white/60 text-xs tracking-wide">
                      SAT BY APPOINTMENT
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
