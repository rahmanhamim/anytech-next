import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/navbar/navbar'
import Footer from '@/components/common/footer/footer'
import Providers from '@/components/providers/_providers'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['Poppins', 'sans-serif'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['Poppins', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} ${inter.variable} font-inter flex min-h-screen flex-col`}
      >
        <Providers>
          <>
            <div className='flex-grow'>
              <Navbar />
              {children}
            </div>
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  )
}
