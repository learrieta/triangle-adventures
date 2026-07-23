import { trackBookNowClick, trackGiftCardClick } from '../../utils/analytics';
import logo from '../../assets/websitelogo.png'
import { TiThMenu } from "react-icons/ti";
import { Link, useLocation } from 'react-router-dom';
import { bookingLinks } from '../../data/bookingLinks';

import './navbar.css'

const NavbarDark = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isLocations = pathname === '/locations' || pathname.startsWith('/locations/')
  const isAbout = pathname === '/about-us'
  const isContact = pathname === '/contact-us'

  const closeMobileMenu = () => {
    const navbarCollapse = document.getElementById('navbarSupportedContent')
    const navbarToggler = document.querySelector('.navbar-toggler')

    if (navbarCollapse?.classList.contains('show')) {
      navbarToggler?.click()
    }
  }

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar--black p-lg-2" id='navbar'>
        <div className="container">
          <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
            <img src={logo} alt="Triangle Adventures" className='navbar--logo--dark' id='navbar--logo' />
          </Link>

          <button
            type='button'
            className='navbar-toggler'
            data-bs-target='#navbarSupportedContent'
            data-bs-toggle="collapse"
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <TiThMenu className='burger--color'></TiThMenu>
          </button>

          <div className="collapse navbar-collapse" id='navbarSupportedContent'>
            <div className="mx-auto">
              <ul className="navbar-nav text-center nav--list">
                <li className="nav-item nav--item-spaced">
                  <Link to="/" className={`nav-link${isHome ? ' active' : ''}`} aria-current={isHome ? 'page' : undefined} onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item dropdown nav--item-spaced locations--dropdown">
                  <Link to="/locations" className={`nav-link dropdown-toggle locations--toggle${isLocations ? ' active' : ''}`} id="locationsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current={pathname === '/locations' ? 'page' : undefined}>
                    <span className="locations--label">Locations <span className="locations--chevron">▾</span></span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark locations--dropdown-menu" aria-labelledby="locationsDropdown">
                    <li><Link to="/locations/raleigh" className="dropdown-item" onClick={closeMobileMenu}>Raleigh Area</Link></li>
                    <li><Link to="/locations/wilmington" className="dropdown-item" onClick={closeMobileMenu}>Wilmington</Link></li>
                  </ul>
                </li>
                <li className="nav-item nav--item-spaced">
                  <Link to={'/about-us'} className={`nav-link${isAbout ? ' active' : ''}`} aria-current={isAbout ? 'page' : undefined} onClick={closeMobileMenu}>About</Link>
                </li>
                <li className="nav-item nav--item-spaced">
                  <Link to={'/contact-us'} className={`nav-link${isContact ? ' active' : ''}`} aria-current={isContact ? 'page' : undefined} onClick={closeMobileMenu}>Contact</Link>
                </li>
              </ul>
            </div>

            <a
              type="button"
              className="small--button--navbar"
              href={bookingLinks.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                closeMobileMenu()
                trackGiftCardClick({ buttonLocation: 'navbar' })
              }}
            >
              Gift Cards
            </a>
            <div className="dropdown booking-location-dropdown">
              <button
                type="button"
                className="small--button--navbar booking-location-toggle mx-3"
                id="bookingLocationDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Book Now!
                <span className="booking-location-chevron" aria-hidden="true">▾</span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-end booking-location-menu"
                aria-labelledby="bookingLocationDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item booking-location-item"
                    to="/locations/raleigh"
                    onClick={() => {
                      closeMobileMenu()
                    }}
                  >
                    <span>Raleigh Area</span>
                    <span className="booking-location-item-hint">Choose tour</span>
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item booking-location-item"
                    href={bookingLinks.wilmingtonTrueCrime}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      closeMobileMenu()
                      trackBookNowClick({
                        tourName: 'Wilmington True Crime Tour',
                        tourSlug: 'wilmington-true-crime',
                        buttonLocation: 'navbar-location-menu',
                      })
                    }}
                  >
                    <span>Wilmington</span>
                    <span className="booking-location-item-hint">View tour</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarDark
