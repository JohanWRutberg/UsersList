import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Användarlista',
  description: 'Lista med filtrerade användare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className="">
      <body className={inter.className}>
        {children}
        
      </body>
    </html>
  )
}
