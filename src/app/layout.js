import '@/../public/src/Style/globals.css'
import '@/../public/src/Style/color.css'
import '@/../public/src/Style/ionicons.min.css'
import '@/../public/src/Style/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '@/Components/Layouts/Header'
import Footer from '@/Components/Layouts/Footer'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
