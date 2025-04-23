

import logo from '../../assets/websitelogo.png'
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';

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
                                <Link to={'/tours'} className="nav-link  ">Our 2025 E-bike Tours</Link>
                            </li>
                            <li className="nav-item dropdown mx-3">
                                <Link to={'/aboutus'} className="nav-link ">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={'/contact-us'} className="nav-link  ">Contact</Link>
                            </li>
                           
                            
                            
                        </ul>
                        
                    </div> 
                    <a type="button" className="small--button--navbar " href='https://fareharbor.com/embeds/book/triangleadventures/items/calendar/?full-items=yes&flow=1269994&from-ssl=yes&ga4t=AW-16453875434%2Cundefined__undefined%3B&g4=yes&cp=no&csp=no&back=https%3A%2F%2Fwww.triangle-adventures.com%2F&u=9b6d5aac-5806-4561-af48-c70f8e3bcf8c&language=en-us' >
                        Giftcards
                    </a>
                    <a type="button" className="small--button--navbar mx-3" href='https://fareharbor.com/embeds/book/triangleadventures/items/calendar/?full-items=yes&flow=1269994&from-ssl=yes&ga4t=AW-16453875434%2Cundefined__undefined%3B&g4=yes&cp=no&csp=no&back=https%3A%2F%2Fwww.triangle-adventures.com%2F&u=9b6d5aac-5806-4561-af48-c70f8e3bcf8c&language=en-us' >
                        Book Now!
                    </a>
                    
                   
                    
                </div>
            </div>
        </nav>
       
    </div>
  )
}

export default NavbarDark