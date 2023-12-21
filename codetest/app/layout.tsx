import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopNav from './components/topnav'
import MainFooter from './components/footer'

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
      <head>

      </head>

      <body className={inter.className}>

        <header>
          <TopNav />
        </header>

        <main className='h-96 bg-indigo-50 mx-10 p-10 flex flex-row justify-between'>
          {children}
        </main>

        <footer>
          <MainFooter />
        </footer>
        
      </body>

    </html>
  )
}
