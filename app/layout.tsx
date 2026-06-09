import type { Metadata, Viewport } from 'next';
import './globals.css';
import Providers from '@/app/providers';
import Navigation from '@/components/navigation/Navigation';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: 'N TI BOL - Saveurs & Fraîcheur au Quotidien',
  description: 'An immersive digital food experience. Discover authentic Mauritian cuisine with a modern twist.',
  keywords: [
    'Restaurant',
    'Mauritius',
    'Food',
    'Mine Bouille',
    'Panini',
    'Halim',
    'Quatre-Bornes',
    'Delivery',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_MU',
    url: 'https://ntibol.mu',
    title: 'N TI BOL - Saveurs & Fraîcheur au Quotidien',
    description: 'An immersive digital food experience. Discover authentic Mauritian cuisine.',
    siteName: 'N TI BOL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N TI BOL - Saveurs & Fraîcheur au Quotidien',
    description: 'An immersive digital food experience. Discover authentic Mauritian cuisine.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
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
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="N TI BOL" />
      </head>
      <body className="bg-charcoal-900 text-cream-50">
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
