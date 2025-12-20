import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Woot! VC - One Day, One Deal',
  description: 'Woot! VC - One Day, One Deal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>{children}</body>
    </html>
  )
}

