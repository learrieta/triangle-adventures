
import { trackBookNowClick, trackGiftCardClick } from '../../utils/analytics';
import logo from '../../assets/websitelogo.png'
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { bookingLinks } from '../../data/bookingLinks';

import './navbar.css'



const NavbarDark = () => {
    
  return (
    <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar--black p-lg-2" id='navbar'>
            <div className="container">
                <Link to="/" className="navbar-brand"> <img src={logo} alt="Triangle Adventures" className='navbar--logo--dark' id='navbar--logo' /> </Link>
                    
                <button 
                    type='button'
                    className='navbar-toggler'
                    data-bs-target='#navbarSupportedContent'
                    data-bs-toggle="collapse"
                    aria-controls='#navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <TiThMenu className='burger--color'></TiThMenu>
                </button>
                <div className="collapse navbar-collapse " id='navbarSupportedContent'>
                    <div className="mx-auto ">
                        <ul className="navbar-nav  text-center nav--list">
                            <li className="nav-item mx-3">
                                <Link to="/" className="nav-link active " aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item dropdown mx-3 locations--dropdown">
                                <Link to="/locations" className="nav-link dropdown-toggle" id="locationsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Locations
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark locations--dropdown-menu" aria-labelledby="locationsDropdown">
                                    <li><Link to="/locations/raleigh" className="dropdown-item">Raleigh</Link></li>
                                    <li><Link to="/locations/wilmington" className="dropdown-item">Wilmington</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-3">
                                <Link to={'/about-us'} className="nav-link ">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={'/contact-us'} className="nav-link  ">Contact</Link>
                            </li>
                        </ul>
                    </div> 
                    <a
                        type="button"
                        className="small--button--navbar "
                        href={bookingLinks.giftCards}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackGiftCardClick({ buttonLocation: 'navbar' })}
                        >
                        Gift Cards
                    </a>
                    <a
                        type="button"
                        className="small--button--navbar mx-3"
                        href={bookingLinks.calendar}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                            trackBookNowClick({
                            tourName: 'All Tours Calendar',
                            tourSlug: 'all-tours',
                            buttonLocation: 'navbar',
                            })
                        }
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
