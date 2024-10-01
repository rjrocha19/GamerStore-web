import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const font = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gam3r.store',
  description: 'versão completa da loja  Gam3r.store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  )
}
