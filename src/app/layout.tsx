import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/header'
import { Footer } from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reimagine the Internet - Mozilla',
  description: '',
}

const navigationItems = [
  {
    "text": "Agenda & Tickets",
    "slug": "agenda"
  },
  {
    "text": "Info",
    "slug": "info"
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header navigation={navigationItems} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
