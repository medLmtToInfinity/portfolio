import ShortBio from '@/components/shortBio'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Container from '@/components/container'
import NavBar from '@/components/navBar'
import SocialAccounts from '@/components/socialAccounts'
import HoverProvider from '@/providers/hover-provider'
import Chat from "@/components/chat";
import QueryProvider from '@/providers/query-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohammed Lamarti Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={`${inter.className} bg-slate-900 text-white`}>
        
            <HoverProvider />
          <Container>
            <div className='lg:flex lg:justify-between lg:gap-4 text-slate-400'>
              <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
                <ShortBio />
                <NavBar />
                <SocialAccounts />
              </header>
              <div className='lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
                {children}
              </div>
            </div>
          </Container>
          <Chat />
        </body>
      </QueryProvider>
    </html>
  )
}
