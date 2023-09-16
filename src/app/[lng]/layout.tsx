import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

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

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode,
  params: {
    lng: string
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Header navigation={navigationItems} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
