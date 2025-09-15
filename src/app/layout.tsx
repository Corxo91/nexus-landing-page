import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Nexus Corporation | Innovación y Tecnología',
  description: 'Innovación y tecnología al servicio de tu negocio. Soluciones digitales personalizadas para impulsar tu éxito.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
