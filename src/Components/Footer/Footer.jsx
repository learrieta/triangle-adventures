import './footer.css';
import { Link } from 'react-router-dom';
import { contactLinks, socialLinks } from '../../data/bookingLinks';
import { trackEmailClick, trackEvent, trackInstagramClick, trackPhoneClick } from '../../utils/analytics';

const FacebookIcon = () => (
  <svg className="footer--social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M14.2 8.4V6.7c0-.8.5-1 1-1h1.5V3.1c-.7-.1-1.5-.2-2.3-.2-2.4 0-4 1.5-4 4.2v1.3H7.8v3h2.6V21h3.2v-9.6h2.7l.4-3h-3Z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="footer--social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M7.8 2.8h8.4c2.8 0 5 2.2 5 5v8.4c0 2.8-2.2 5-5 5H7.8c-2.8 0-5-2.2-5-5V7.8c0-2.8 2.2-5 5-5Zm0 1.8c-1.8 0-3.2 1.4-3.2 3.2v8.4c0 1.8 1.4 3.2 3.2 3.2h8.4c1.8 0 3.2-1.4 3.2-3.2V7.8c0-1.8-1.4-3.2-3.2-3.2H7.8Zm4.2 3.1a4.3 4.3 0 1 1 0 8.6 4.3 4.3 0 0 1 0-8.6Zm0 1.8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.6-2.2a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1Z" />
  </svg>
)

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
                <FacebookIcon />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Triangle Adventures on Instagram"
                onClick={() => trackInstagramClick({ buttonLocation: 'footer' })}
              >
                <InstagramIcon />
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
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
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
