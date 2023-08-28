
import { Navbar } from '@/components/navbar'
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='font-arial'>
        <Navbar />
        {children}

      </body>

    </html>
  )
}
