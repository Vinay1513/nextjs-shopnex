import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ShopNex - Your Premium Online Store',
  description: 'Discover amazing products at ShopNex. From electronics to lifestyle, find everything you need with fast shipping and great prices.',
  keywords: 'e-commerce, online shopping, electronics, fashion, lifestyle',
  authors: [{ name: 'ShopNex Team' }],
  openGraph: {
    title: 'ShopNex - Your Premium Online Store',
    description: 'Discover amazing products at ShopNex',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
