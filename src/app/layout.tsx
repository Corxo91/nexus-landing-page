// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import {headers} from 'next/headers'
import { SpeedInsights } from "@vercel/speed-insights/next"

function computedBase(): URL {
  // Descubre host dinámico en Preview si NEXT_PUBLIC_SITE_URL no está seteado
  const fallback = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  // En previews, Vercel expone HOST por cabecera
  const hdrs = headers();
  const host = hdrs.get('x-forwarded-host') || hdrs.get('host');
  const proto = hdrs.get('x-forwarded-proto') || 'https';
  const env = process.env.NEXT_PUBLIC_ENV;

  if (!host || env === 'prod') return new URL(fallback);
  return new URL(`${proto}://${host}`);
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nexuscorpglobal.com'),
  title: {
    default: 'Nexus Corp | El ecosistema que impulsa tu futuro',
    template: '%s | Nexus Corp',
  },
  description:
    'Nexus Corp es el ecosistema digital que impulsa tu futuro: tecnología, ciberseguridad, pagos, cripto, redes, cloud, soporte y retail. Soluciones globales para empresas y personas.',
  keywords: [
    'nexus corp', 'tecnología', 'ciberseguridad', 'desarrollo de software', 'pagos',
    'cripto', 'inversión', 'redes', 'cloud', 'soporte técnico', 'ecosistema',
    'technology', 'cybersecurity', 'software development', 'payments', 'crypto',
    'investment', 'networks', 'cloud', 'technical support', 'ecosystem'
  ],
  authors: [{ name: 'Nexus Corp', url: 'https://nexuscorpglobal.com' }],
  creator: 'Nexus Corp',

  openGraph: {
    title: 'Nexus Corp | El ecosistema que impulsa tu futuro',
    description:
      'Tecnología, seguridad, pagos, cripto, redes, cloud, soporte y retail en un solo ecosistema.',
    url: '/',
    siteName: 'Nexus Corp',
    images: [{ url: '/og/nexuscorp-hero-1200x630.png', width: 1200, height: 630, alt: 'Nexus Corp Hero' }],
    locale: 'es_ES',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nexuscorp',
    title: 'Nexus Corp | El ecosistema que impulsa tu futuro',
    description:
      'Tecnología, seguridad, pagos, cripto, redes, cloud, soporte y retail en un solo ecosistema.',
    images: ['/og/nexuscorp-hero-1200x630.png'],
  },

  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { rel: 'mask-icon', url: '/brand/nexus-logo.svg', color: '#00bf71' },
    ],
  },

  manifest: '/manifest.json',

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

  alternates: {
    canonical: 'https://nexuscorpglobal.com',
    languages: {
      es: 'https://nexuscorpglobal.com',
      en: 'https://nexuscorpglobal.com/en',
    },
  },

  // opcional: verificación Search Console
  // verification: { google: 'CODE_DE_VERIFICACION' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <SpeedInsights />
      </body>

    </html>
  )
}
