import './globals.css'
//import { Montserrat } from 'next/font/google'
import { montserrat } from './fonts';
//const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: '4Quality Chocolate Spreads',
  description: 'High Quality Products from Italy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
