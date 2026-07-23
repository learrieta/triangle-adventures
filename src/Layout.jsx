import Footer from './Components/Footer/Footer'

import { Outlet } from 'react-router-dom'

import NavbarDark from './Components/Navbar/NavbarDark'

const Layout = () => {
  return (
    <div>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <NavbarDark />
        <main id="main-content">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout
