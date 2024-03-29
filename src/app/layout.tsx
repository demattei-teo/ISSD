import { Header } from '@/components'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proyecto ISSD',
  description: 'proyecto ISSD'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <main className='wrapper'>
          {children}
        </main>
      </body>
    </html>
  )
}
