import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'YourBrand - Modern Solutions for Your Business',
    template: '%s | YourBrand',
  },
  description:
    'Transform your business with cutting-edge technology solutions. We deliver innovative services that drive growth and enhance efficiency.',
  keywords: ['business solutions', 'technology', 'digital transformation', 'web development'],
  authors: [{ name: 'YourBrand' }],
  creator: 'YourBrand',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourbrand.com',
    siteName: 'YourBrand',
    title: 'YourBrand - Modern Solutions for Your Business',
    description:
      'Transform your business with cutting-edge technology solutions. We deliver innovative services that drive growth and enhance efficiency.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YourBrand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourBrand - Modern Solutions for Your Business',
    description:
      'Transform your business with cutting-edge technology solutions. We deliver innovative services that drive growth and enhance efficiency.',
    images: ['/images/og-image.jpg'],
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-text-primary antialiased">
        <ScrollProgress />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <BackToTop />
      </body>
    </html>
  )
}

