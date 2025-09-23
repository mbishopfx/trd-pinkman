import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const siteConfig = {
  name: "The Pink Guy Painting LLC",
  description: "Architectural finishes that tell their own stories. Premium painting services, specialty finishes, and handyman services across Sherman Oaks, Encino, and Los Angeles.",
  url: "https://callthepinkguy.com",
  ogImage: "https://callthepinkguy.com/og.jpg",
  links: {
    phone: "(818) 383-2527",
    email: "jackson@callthepinkguy.com",
    address: "18034 Ventura Blvd. Suite 242, Encino, CA 91316"
  }
}

export const services = [
  {
    id: "premium-interior-painting",
    title: "Premium Interior Painting",
    description: "Whole‑home repaints, luxury room refreshes, accent walls, and specialty ceiling treatments that transform your living spaces",
    features: ["Drywall patching and seamless texture matching", "Crown molding, baseboards, doors, and architectural trim", "Low‑VOC premium paints and eco‑friendly color options", "Color consultation and custom paint mixing"],
    icon: "🎨"
  },
  {
    id: "exterior-painting-restoration",
    title: "Exterior Painting & Restoration", 
    description: "Professional stucco painting, wood siding restoration, and weather-resistant protective coatings for lasting curb appeal",
    features: ["Power washing and thorough surface preparation", "Premium weather-resistant and fade-proof coatings", "Fascia, soffits, shutters, and decorative trim work", "Color matching and historic restoration expertise"],
    icon: "🏠"
  },
  {
    id: "lime-wash-specialty-finish",
    title: "Lime Wash Specialty Finish",
    description: "Authentic lime-based finish that creates soft, organic texture with natural patina that evolves beautifully over time",
    features: ["Breathable, moisture-tolerant natural finish", "Interior and exterior masonry applications", "Artisanal color layering and patina techniques", "Historic restoration and modern design applications"],
    icon: "✨"
  },
  {
    id: "roman-clay-plaster",
    title: "Roman Clay Plaster",
    description: "Smooth, knife-applied clay plaster finish offering subtle modern elegance with naturalistic stone and marble textures",
    features: ["Hand-troweled application for unique texture", "Perfect for contemporary and traditional interiors", "Natural clay-based eco-friendly material", "Custom color blending and finish techniques"],
    icon: "🏛️"
  },
  {
    id: "venetian-plaster-luxury",
    title: "Venetian Plaster & Luxury Finishes",
    description: "Hand‑troweled, multi‑coat Venetian plaster with mirror-like polish and sophisticated European artisan techniques",
    features: ["Custom sheens from satin to high-gloss mirror finish", "Feature walls and luxury architectural applications", "Authentic Italian plaster techniques", "Metallic and decorative specialty applications"],
    icon: "💎"
  },
  {
    id: "cabinet-refinishing-spray",
    title: "Cabinet Refinishing & Spray Finishing",
    description: "Professional kitchen and bathroom cabinet refinishing with durable spray finishes that rival new cabinetry",
    features: ["Clean, degloss, sand, and prime preparation process", "Professional spray booth quality finish", "Color matching and custom paint selection", "Durable topcoats designed for high-use areas"],
    icon: "🚪"
  },
  {
    id: "commercial-painting-contractors",
    title: "Commercial Painting Services",
    description: "Professional commercial painting for offices, retail spaces, hospitality venues, and multi‑unit properties", 
    features: ["Flexible off-hours and weekend scheduling", "Durable, cleanable coatings for high-traffic areas", "Brand-consistent color systems and corporate identity", "Large-scale project management and coordination"],
    icon: "🏢"
  },
  {
    id: "handyman-painting-services",
    title: "Handyman & Home Repair Services",
    description: "Complete home maintenance services including drywall repair, trim work, and precision touch-up painting",
    features: ["TV mounting, picture hanging, and custom shelving", "Door adjustment, hardware replacement, and repairs", "Fence and gate repair with protective coating", "Pressure washing and exterior maintenance"],
    icon: "🔧"
  }
]

export const testimonials = [
  {
    id: 1,
    name: "Fariba Manoucheri",
    text: "Jackson and the Pink Guy Crew are very professional. I would recommend them to anyone!",
    rating: 5
  },
  {
    id: 2,
    name: "Greg F",
    text: "Pink guys are wonderful. Jackson is attentive and job gets done to highest professionalism. We hire them for all interior jobs.",
    rating: 5
  },
  {
    id: 3,
    name: "Areyon Jolivette", 
    text: "He was prompt, polite, kind and quick… Truly could not recommend The Pink Guy enough!",
    rating: 5
  },
  {
    id: 4,
    name: "Daniel Morson",
    text: "Pays close attention to details… Looking forward to doing a lot of work with Jackson and his team in the future.",
    rating: 5
  },
  {
    id: 5,
    name: "Joel Krischer",
    text: "We have changed the review to a full five (hell, I'd go to 6 if I could).",
    rating: 5
  }
]

export const serviceAreas = [
  "Sherman Oaks", "Encino", "Tarzana", "Studio City", "Van Nuys", 
  "Valley Village", "North Hollywood", "Woodland Hills", "Reseda", 
  "Lake Balboa", "Toluca Lake", "Beverly Hills", "West Hollywood", 
  "Bel Air", "Brentwood", "Santa Monica"
]

export const processSteps = [
  {
    step: 1,
    title: "Consultation & Scope",
    description: "Walkthrough, goals, materials, and timeline"
  },
  {
    step: 2,
    title: "Detailed Estimate", 
    description: "Clear line items and personalized pricing"
  },
  {
    step: 3,
    title: "Protection",
    description: "Masking, coverings, site containment, dust control"
  },
  {
    step: 4,
    title: "Surface Prep",
    description: "Wash, scrape, sand, patch, fill, prime, and caulk"
  },
  {
    step: 5,
    title: "Application",
    description: "Professional brush/roll/spray techniques to spec"
  },
  {
    step: 6,
    title: "Quality Check",
    description: "Punch‑list pass, touch‑ups, finish verification"
  },
  {
    step: 7,
    title: "Clean‑Up & Care",
    description: "Site clean, disposal, maintenance guidance"
  }
]
