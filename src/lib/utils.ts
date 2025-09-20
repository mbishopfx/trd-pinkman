import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const siteConfig = {
  name: "The Pink Guy Painting LLC",
  description: "Precision‑first painting and dependable handyman repairs across Sherman Oaks, Encino, and the greater Los Angeles area.",
  url: "https://callthepinkguy.com",
  ogImage: "https://callthepinkguy.com/og.jpg",
  links: {
    phone: "(818) 383-2527",
    email: "callthepinkguy@gmail.com",
    address: "18034 Ventura Blvd. Suite 242, Encino, CA 91316"
  }
}

export const services = [
  {
    id: "interior-painting",
    title: "Interior Painting",
    description: "Whole‑home repaints, room refreshes, ceilings, accent walls",
    features: ["Drywall patching and texture matching", "Trim, baseboards, doors, crown molding", "Low‑VOC and eco‑friendly options"],
    icon: "🎨"
  },
  {
    id: "exterior-painting",
    title: "Exterior Painting", 
    description: "Stucco, wood, and siding repainting",
    features: ["Surface washing and preparation", "Weather-resistant coatings", "Fascia, soffits, and trim work"],
    icon: "🏠"
  },
  {
    id: "commercial-painting",
    title: "Commercial Painting",
    description: "Offices, retail, hospitality, multi‑unit properties", 
    features: ["Off-hours scheduling", "Durable, cleanable coatings", "Brand-consistent color systems"],
    icon: "🏢"
  },
  {
    id: "cabinet-refinishing",
    title: "Cabinet Refinishing",
    description: "Clean, degloss, sand, prime, and spray‑finish systems",
    features: ["Durable topcoats for kitchens", "Color matching and sheen selection", "Professional spray finish"],
    icon: "🚪"
  },
  {
    id: "lime-wash",
    title: "Lime Wash",
    description: "Soft, velvety, breathable finish that patinas gracefully",
    features: ["Moisture-tolerant and eco-friendly", "Historic and modern applications", "Color layering techniques"],
    icon: "✨"
  },
  {
    id: "venetian-plaster",
    title: "Venetian Plaster",
    description: "Hand‑troweled, multi‑coat plaster with marble‑like polish",
    features: ["Custom sheens from satin to mirror gloss", "Feature walls and luxury applications", "Timeless luxury finish"],
    icon: "💎"
  },
  {
    id: "handyman-services",
    title: "Handyman Services",
    description: "Drywall repair, trim work, and home maintenance",
    features: ["TV mounting and shelving", "Door repair and hardware", "Fence/gate repair and pressure washing"],
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
