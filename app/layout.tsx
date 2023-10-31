import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'tw-elements/dist/css/tw-elements.min.css'
import Head from 'next/head'

import Favicon from '../public/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Linqkeun',
//   description: 'Manage your business with ease with Linqkeun, a mini ERP app that helps you with',
//   icons: {
//     icon: "./favicon.ico",
//     apple: './favicon.ico'
//   },
//   twitter: {
//     images: './favicon.ico'
//   },

// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Manage your business with ease with Linqkeun, a mini ERP app that helps you with" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <title>Linqkeun</title>

        <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
        <link rel="shortcut-icon" href="../public/favicon.ico" />
        <link rel="manifest" href="./favicon/site.webmanifest" />
        <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>

  )
}
