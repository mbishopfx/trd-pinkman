import React from 'react'
import { siteConfig } from '@/lib/utils'

export function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Pink Guy Painting LLC",
    "image": "https://callthepinkguy.com/og.jpg",
    "url": "https://callthepinkguy.com/",
    "telephone": "+1-818-383-2527",
    "email": "callthepinkguy@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18034 Ventura Blvd. Suite 242",
      "addressLocality": "Encino",
      "addressRegion": "CA",
      "postalCode": "91316",
      "addressCountry": "US"
    },
    "areaServed": [
      "Sherman Oaks", "Encino", "Tarzana", "Studio City", "Van Nuys", 
      "Valley Village", "North Hollywood", "Woodland Hills", "Reseda",
      "Lake Balboa", "Toluca Lake", "Beverly Hills", "West Hollywood",
      "Bel Air", "Brentwood", "Santa Monica", "Los Angeles"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "17:00",
        "description": "By Appointment Only"
      }
    ],
    "sameAs": [
      "https://nextdoor.com/pages/the-pink-guy-handyman-sherman-oaks-ca/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "33",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Check", "Credit Card"],
    "currenciesAccepted": "USD"
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Handyman and House Painting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "The Pink Guy Painting LLC",
      "telephone": "+1-818-383-2527",
      "areaServed": "Greater Los Angeles"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Handyman & Painting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Painting",
            "description": "Professional interior painting services including whole-home repaints, room refreshes, ceilings, and accent walls"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Painting",
            "description": "Comprehensive exterior painting for stucco, wood, siding, fascia, soffits, and weatherproofing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Painting",
            "description": "Professional commercial painting for offices, retail, hospitality, and multi-unit properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Construction Painting",
            "description": "Builder partnerships for rough-to-finish paint scopes with production-ready processes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cabinet Refinishing",
            "description": "Professional cabinet refinishing with spray-finish systems and durable topcoats"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lime Wash",
            "description": "Natural mineral lime wash finish that's moisture-tolerant and eco-friendly"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Venetian Plaster",
            "description": "Hand-troweled, multi-coat plaster with marble-like polish for luxury applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Handyman Services",
            "description": "Complete handyman services including drywall repair, trim work, door repair, and home maintenance"
          }
        }
      ]
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "The Pink Guy Painting LLC",
    "alternateName": "The Pink Guy",
    "url": "https://callthepinkguy.com",
    "logo": "https://callthepinkguy.com/logo.png",
    "description": siteConfig.description,
    "founder": {
      "@type": "Person",
      "name": "Jackson"
    },
    "foundingDate": "2020",
    "slogan": "It's All in the Prep",
    "knowsAbout": [
      "Interior Painting",
      "Exterior Painting", 
      "Cabinet Refinishing",
      "Lime Wash",
      "Venetian Plaster",
      "Handyman Services",
      "Drywall Repair",
      "Home Maintenance"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 34.1522,
        "longitude": -118.4437
      },
      "geoRadius": "25000"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
    </>
  )
}
