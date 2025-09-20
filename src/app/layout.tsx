import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { StructuredData } from '@/components/StructuredData'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ec4899',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://callthepinkguy.com'),
  title: {
    default: 'The Pink Guy Painting LLC | Sherman Oaks Handyman & House Painting',
    template: '%s | The Pink Guy Painting LLC'
  },
  description: 'Precision‑first painting and dependable handyman repairs across Sherman Oaks, Encino, and the greater Los Angeles area. Interior/exterior painting, cabinet refinishing, lime wash, Venetian plaster, and handyman services.',
  keywords: [
    'handyman Sherman Oaks',
    'handyman Encino', 
    'house painting Los Angeles',
    'interior painting Sherman Oaks',
    'exterior painting Encino',
    'cabinet refinishing LA',
    'lime wash Los Angeles',
    'Venetian plaster LA',
    'drywall repair Sherman Oaks',
    'home repair Los Angeles',
    'painting contractor San Fernando Valley',
    'commercial painting LA'
  ],
  authors: [{ name: 'The Pink Guy Painting LLC' }],
  creator: 'The Pink Guy Painting LLC',
  publisher: 'The Pink Guy Painting LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://callthepinkguy.com',
    siteName: 'The Pink Guy Painting LLC',
    title: 'The Pink Guy Painting LLC | Sherman Oaks Handyman & House Painting',
    description: 'Precision‑first painting and dependable handyman repairs. Interior/exterior painting, cabinet refinishing, lime wash, Venetian plaster, and handyman services. Serving Sherman Oaks, Encino, and LA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Pink Guy Painting LLC - Professional Painting and Handyman Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pink Guy Painting LLC | Sherman Oaks Handyman & House Painting',
    description: 'Precision‑first painting and dependable handyman repairs across Sherman Oaks, Encino, and LA.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://callthepinkguy.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}