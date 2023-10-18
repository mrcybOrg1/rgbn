"use client"
import '@/../public/src/Style/globals.css'
import '@/../public/src/Style/color.css'
import '@/../public/src/Style/ionicons.min.css'
import '@/../public/src/Style/font-awesome.min.css'
import '@/../public/src/Style/bootstrap.min.css'
import Header from '@/Components/Layouts/Header'
import Footer from '@/Components/Layouts/Footer'
import Preloader from '@/Components/Layouts/Preloader'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
