import Footer from './Components/Footer/Footer'
import StickyMobileCTA from './Components/MobileCTA/StickyMobileCTA'

import { Outlet } from 'react-router-dom'

import NavbarDark from './Components/Navbar/NavbarDark'

const Layout = () => {
  return (
    <div>
        <NavbarDark />
        <main>
            <Outlet />
        </main>
        <Footer />
        <StickyMobileCTA />
    </div>
  )
}

export default Layout
