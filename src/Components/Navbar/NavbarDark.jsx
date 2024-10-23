

import logo from '../../assets/websitelogo.png'
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';
import imgBanner from '../../assets/banner-picture.png'
import './navbar.css'



const NavbarDark = () => {
    
  return (
    <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar--black p-lg-2" id='navbar'>
            <div className="container">
                <a href="#" className="navbar-brand"> <img src={logo} alt="" className='navbar--logo--dark' id='navbar--logo' /> </a>
                    
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
                            <li className="nav-item mx-3">
                                <Link to={'/tours'} className="nav-link  ">Tours</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="#" className="nav-link ">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="#" className="nav-link  ">Contact</Link>
                            </li>
                            
                        </ul>
                        
                    </div> 
                    <a type="button" className="small--button--navbar">
                        Book Now!
                    </a>
                    
                </div>
            </div>
        </nav>
       
    </div>
  )
}

export default NavbarDark