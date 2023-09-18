import '../globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Header } from '../components/header'
import { Footer } from '../components/footer'

import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { useTranslation } from '../i18n'
import { NavigationItem } from '../components/header/types'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reimagine the Internet - Mozilla',
  description: '',
}

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
  const { t } = await useTranslation(lng);
  const navigationItems = t('menuItems', { returnObjects: true }) as NavigationItem[];

  console.log(navigationItems)


  return (
    <html lang={lng} dir={dir(lng)}>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-6P1MW6NND8"/>
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6P1MW6NND8');
        `}
      </Script>
      <body className={inter.className}>
        <Header navigation={navigationItems} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
