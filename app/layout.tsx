import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'tw-elements/dist/css/tw-elements.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Linqkeun',
  description: 'Manage your business with ease with Linqkeun, a mini ERP app that helps you with',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
