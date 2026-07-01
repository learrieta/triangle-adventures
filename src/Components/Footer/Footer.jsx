import './footer.css';
import { Link } from 'react-router-dom';
import { contactLinks, socialLinks } from '../../data/bookingLinks';
import { trackEmailClick, trackEvent, trackInstagramClick, trackPhoneClick } from '../../utils/analytics';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer--main-grid">
          <div className="footer--brand-col">
            <Link to="/" className="footer--brand">Triangle Adventures</Link>
            <p>
              Guided e-bike tours through local stories, scenic routes, food stops, mystery, history, and hidden gems across North Carolina.
            </p>
            <div className="footer--socials" aria-label="Triangle Adventures social links">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Triangle Adventures on Facebook"
                onClick={() =>
                  trackEvent('facebook_click', {
                    button_location: 'footer',
                    destination: 'facebook',
                  })
                }
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Triangle Adventures on Instagram"
                onClick={() => trackInstagramClick({ buttonLocation: 'footer' })}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer--link-col">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/locations/raleigh">Raleigh Tours</Link></li>
              <li><Link to="/locations/wilmington">Wilmington Tours</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>

          <div className="footer--link-col">
            <h3>Popular Tours</h3>
            <ul>
              <li><Link to="/locations/raleigh/scenic-tour">Greenery & Scenery</Link></li>
              <li><Link to="/locations/raleigh/foods-and-drinks-tour">Tacos & Margaritas</Link></li>
              <li><Link to="/locations/raleigh/ghost-and-mysteries">Ghosts & Mystery</Link></li>
              <li><Link to="/locations/wilmington/true-crime-tour">Wilmington: True Crime & Weird History</Link></li>
            </ul>
          </div>

          <div className="footer--contact-col">
            <h3>Contact</h3>
            <a
              href={contactLinks.email}
              onClick={() => trackEmailClick({ buttonLocation: 'footer' })}
            >
              Info@Triangle-Adventures.com
            </a>
            <a
              href={contactLinks.phone}
              onClick={() => trackPhoneClick({ buttonLocation: 'footer' })}
            >
              919-807-1368
            </a>
            <a
              className="footer--newsletter"
              href={socialLinks.newsletter}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent('newsletter_click', {
                  button_location: 'footer',
                  destination: 'square',
                })
              }
            >
              Subscribe to newsletter
            </a>
          </div>
        </div>

        <div className="footer--bottom-bar">
          <p>© 2026 Triangle Adventures. All rights reserved.</p>
          <p>Website by <span>WebSense Studio</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;