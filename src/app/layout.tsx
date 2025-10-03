import type { Metadata, Viewport } from 'next'
import { Inter, Crimson_Text } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { StructuredData } from '@/components/StructuredData'
import { AnalyticsProvider } from '@/components/AnalyticsProvider'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#44403c',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://callthepinkguy.com'),
  title: {
    default: 'The Pink Guy | Premium Architectural Finishes Sherman Oaks',
    template: '%s | The Pink Guy'
  },
  description: 'Architectural finishes that tell their own stories. Premium painting services, specialty finishes, and handyman repairs across Sherman Oaks, Encino, and Los Angeles. Interior painting, exterior painting, cabinet refinishing, lime wash, Venetian plaster, Roman clay finishes.',
  keywords: [
    'architectural finishes Sherman Oaks',
    'premium painting contractor Los Angeles',
    'specialty finishes Sherman Oaks', 
    'lime wash painting Los Angeles',
    'Venetian plaster Sherman Oaks',
    'Roman clay finishes LA',
    'luxury interior painting Sherman Oaks',
    'high-end exterior painting Encino',
    'cabinet refinishing Sherman Oaks',
    'custom paint finishes Los Angeles',
    'artisan painting services LA',
    'decorative painting Sherman Oaks',
    'texture painting Los Angeles',
    'handyman services Sherman Oaks'
  ],
  authors: [{ name: 'The Pink Guy' }],
  creator: 'The Pink Guy',
  publisher: 'The Pink Guy',
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
    siteName: 'The Pink Guy',
    title: 'The Pink Guy | Premium Architectural Finishes Sherman Oaks',
    description: 'Architectural finishes that tell their own stories. Premium painting services, specialty finishes, and handyman repairs across Sherman Oaks, Encino, and Los Angeles.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Pink Guy - Professional Painting and Handyman Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pink Guy | Premium Architectural Finishes Sherman Oaks',
    description: 'Architectural finishes that tell their own stories. Premium painting services and specialty finishes across Sherman Oaks and LA.',
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
    <html lang="en" className={`${inter.variable} ${crimsonText.variable}`}>
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
        <Analytics />
      </body>
    </html>
  )
}