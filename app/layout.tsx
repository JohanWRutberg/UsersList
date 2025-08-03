import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Användarlista',
  description: 'Enkel app med sök och könsfilter',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-gray-50 text-gray-800">{children}</body>
    </html>
  )
}
