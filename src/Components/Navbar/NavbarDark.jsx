import { trackBookNowClick, trackGiftCardClick } from '../../utils/analytics';
import logo from '../../assets/websitelogo.png'
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { bookingLinks } from '../../data/bookingLinks';

import './navbar.css'

const NavbarDark = () => {
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
                  <Link to="/" className="nav-link active" aria-current="page" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item dropdown nav--item-spaced locations--dropdown">
                  <Link to="/locations" className="nav-link dropdown-toggle locations--toggle" id="locationsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="locations--label">Locations <span className="locations--chevron">▾</span></span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark locations--dropdown-menu" aria-labelledby="locationsDropdown">
                    <li><Link to="/locations/raleigh" className="dropdown-item" onClick={closeMobileMenu}>Raleigh</Link></li>
                    <li><Link to="/locations/wilmington" className="dropdown-item" onClick={closeMobileMenu}>Wilmington</Link></li>
                  </ul>
                </li>
                <li className="nav-item nav--item-spaced">
                  <Link to={'/about-us'} className="nav-link" onClick={closeMobileMenu}>About</Link>
                </li>
                <li className="nav-item nav--item-spaced">
                  <Link to={'/contact-us'} className="nav-link" onClick={closeMobileMenu}>Contact</Link>
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
            <a
              type="button"
              className="small--button--navbar mx-3"
              href={bookingLinks.calendar}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                closeMobileMenu()
                trackBookNowClick({
                  tourName: 'All Tours Calendar',
                  tourSlug: 'all-tours',
                  buttonLocation: 'navbar',
                })
              }}
            >
              Book Now!
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarDark