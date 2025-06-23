import type { Metadata } from 'next'
import './globals.css'
import Navbar from "./Navbar"
import ScrollToTop from './ScrollToTop'

export const metadata: Metadata = {
  title: 'Smart Farming | Education Platform',
  description: 'Empowering Kenyan youth with sustainable and modern farming education. Developed by Nathaly Michel Berroa Fermín.',
  generator: 'SmartFarming • Next.js',
  icons: {
  icon: "/favicon.ico"
  },
  keywords: ['Smart Farming', 'AgriTech', 'Kenya', 'Youth Education', 'Nathaly Berroa', 'Sustainable Agriculture'],
  authors: [{ name: 'Nathaly Michel Berroa Fermín' }],
  creator: 'Nathaly Michel Berroa Fermín',
  themeColor: '#16a34a',
  openGraph: {
    title: 'Smart Farming Education Platform',
    description: 'A responsive, educational platform that teaches modern farming techniques to youth in Kenya.',
    url: 'https://smart-farming-platform.netlify.app/',
    siteName: 'SmartFarming',
    images: [
      {
        url: '/thumbnail.png', // agregar un thumbnail representativo si tienes
        width: 1200,
        height: 630,
        alt: 'Smart Farming Hero',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
