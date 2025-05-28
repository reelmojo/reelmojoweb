// app/layout.tsx or app/layout.js

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ReelMojo - Viral Instagram Reels & YouTube Shorts Bundles | Download Trending Video Packs',
  description:
    'Download 5000+ viral Instagram Reels and YouTube Shorts bundles. Boost your followers, engagement, and reach with high-quality, ready-to-use video packs for creators, influencers, and businesses. Instant download, affordable prices, and new content every week!',
  keywords: [
    'Instagram Reels Bundles',
    'YouTube Shorts Bundles',
    'Viral Reels Download',
    'Trending Shorts Packs',
    'Buy Reels India',
    'Download Viral Videos',
    'ReelMojo',
    'Social Media Growth',
    'Content Creator Tools',
    'Instagram Growth',
    'YouTube Growth',
    'Viral Video Packs',
    'Reel Bundles',
    'Shorts Bundles',
    'Download Reels',
    'Download Shorts'
  ],
  metadataBase: new URL('https://reelmojo.com'), // Replace with your domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ReelMojo - Viral Instagram Reels & YouTube Shorts Bundles',
    description:
      'Download 5000+ viral Instagram Reels and YouTube Shorts bundles. Boost your followers, engagement, and reach with high-quality, ready-to-use video packs for creators, influencers, and businesses.',
    url: 'https://reelmojo.com',
    siteName: 'ReelMojo',
    images: [
      {
        url: '/og-image.png', // Place this image in your /public folder
        width: 1200,
        height: 630,
        alt: 'ReelMojo - Viral Reels & Shorts Bundles',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReelMojo - Viral Instagram Reels & YouTube Shorts Bundles',
    description:
      'Download 5000+ viral Instagram Reels and YouTube Shorts bundles. Boost your social media growth with trending video packs.',
    site: '@ReelMojo', // Replace with your Twitter handle
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fallback favicon for older browsers */}
        <link rel="icon" href="/favicon.ico" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8096601763375595"
     crossorigin="anonymous"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
