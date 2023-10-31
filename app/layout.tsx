import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'tw-elements/dist/css/tw-elements.min.css'
import Head from 'next/head'

import Favicon from './icon/android-chrome-512x512.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Linqkeun',
  description: 'Manage your business with ease with Linqkeun, a mini ERP app that helps you with',
  icons: {
    icon: "./favicon.ico",
    apple: './favicon.ico'
  },
  twitter: {
    images: './favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link
          rel="icon"
          href="./icon/android-chrome-512x512.png"
          type="image/<generated>"
          sizes="<generated>"
        />

        <link
          rel="apple-touch-icon"
          href="./icon/android-chrome-512x512.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
