import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['500', '700', '400', '100', '300', '900'] })

export const metadata: Metadata = {
  title: 'Memora',
  description: 'Store and relive your most precious memories. Capture, organize, and share special moments all in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-sm lg:text-lg`}>{children}</body>
    </html>
  )
}
