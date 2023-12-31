import './globals.css'
import { Inter } from 'next/font/google'
import Modal from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trello Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#f5f6f8]'>
        {children}

        <Modal />
      </body>
    </html>
  )
}
