import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Codespace Test',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <header>
          <div>Header</div>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <div>Footer</div>
        </footer>
        
      </body>
    </html>
  )
}