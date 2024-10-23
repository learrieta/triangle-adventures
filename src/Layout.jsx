import Footer from './Components/Footer/Footer'

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
    </div>
  )
}

export default Layout