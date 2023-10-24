import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '365Notes - #365DaysofCode',
  description: 'Notes App for 365 Days of Code Challenge',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en" className='bg-gradient-to-l from-[#1c1c1c] to-[#242424]'>
      <body className={inter.className}>
        <div className='p-4'>
          <div className='max-w-5xl mx-auto'>
            <Navbar />
          </div>
          <div className='max-w-7xl mx-auto mt-12'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
