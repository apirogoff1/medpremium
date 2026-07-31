import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Providers } from './providers'
import JsonLd from './components/JsonLd'
import { YandexMetrika } from '@/components/analytics/YandexMetrika'
import './globals.css'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'cyrillic'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'MyProject — AI-powered SaaS Starter',
    template: '%s | MyProject',
  },
  description: 'Professional AI-ready starter kit for modern web applications. Built with Next.js 15, React 19, TypeScript, and Groq AI.',
  keywords: ['AI', 'SaaS', 'Next.js', 'starter kit', 'web app', 'TypeScript'],
  authors: [{ name: 'MyProject Team' }],
  creator: 'MyProject',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: APP_URL,
    siteName: 'MyProject',
    title: 'MyProject — AI-powered SaaS Starter',
    description: 'Professional AI-ready starter kit for modern web applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyProject',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyProject — AI-powered SaaS Starter',
    description: 'Professional AI-ready starter kit for modern web applications.',
    images: ['/og-image.png'],
  },
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
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <YandexMetrika />
        <JsonLd />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
