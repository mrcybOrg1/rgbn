import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import './Style/globals.css'
import './css/bootstrap.min.css'
import './css/font-awesome.min.css'
import './css/ionicons.min.css'
import './css/datepicker.css'
import './css/jquery.fancybox.min.css'
import './css/owl.carousel.css'
import './css/owl.transitions.css'
import './css/colors/color.css'


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
