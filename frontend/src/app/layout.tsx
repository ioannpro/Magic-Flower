import './globals.scss'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Magic Flower - Magic in every flower ',
  description: 'Buy your magic bouquet at Magic Flower!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
