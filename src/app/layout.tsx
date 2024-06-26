import './globals.css'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';


export const metadata = {
  title: 'Dener Araujo - Full Stack Developer',
  description: `Dener Araujo's portfolio`,
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'auto',
  fallback: ['sans-serif', 'system-ui', 'arial']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-poppins`}>
      <body>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
