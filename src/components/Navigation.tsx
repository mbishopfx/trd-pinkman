"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ShoppingCart, User, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'COLLECTIONS' },
  { href: '/services', label: 'SAMPLES & ACCESSORIES' },
  { href: '/gallery', label: 'PRIMERS & SEALERS' },
  { href: '/about', label: 'PAINT INFORMATION' },
  { href: '/contact', label: 'GALLERY' },
  { href: '/contact', label: 'CONTACT' },
  { href: '/contact', label: 'LOCATIONS' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                className="text-white font-display text-lg sm:text-xl lg:text-2xl tracking-wide"
              >
                THE PINK GUY
                <div className="text-xs tracking-widest text-neutral-300 mt-0.5 sm:mt-1">
                  PAINTS
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
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
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
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
