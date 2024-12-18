import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Providers } from '../components/providers' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MediClinic',
  description: 'Your trusted healthcare provider',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

