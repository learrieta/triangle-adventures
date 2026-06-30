import './footer.css';
import { Link } from 'react-router-dom';
import { contactLinks, socialLinks } from '../../data/bookingLinks';
import { trackEmailClick, trackEvent, trackInstagramClick, trackPhoneClick } from '../../utils/analytics';

const Footer = () => {
  return (
    <div className="footer mt-5">
      <footer className="text-center text-white footer--items">
        <div className="container p-4">
          <div className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href={socialLinks.facebook}
              role="button"
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
              className="btn btn-outline-light btn-floating m-1"
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="Triangle Adventures on Instagram"
              onClick={() => trackInstagramClick({ buttonLocation: 'footer' })}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <div>
            <div className="row d-flex justify-content-center">
              <div className="row justify-content-center pb-4" >
                <div className="col-auto">
                  <h5 className="pt-2  ">
                    <strong>Subscribe to our newsletter</strong>
                  </h5>
                </div>
              </div>
              <div className="col-auto">
                <a
                  className="btn btn-outline-light mb-4"
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
                  Subscribe
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase footer--title">About Us</h5>
              <ul className="list-unstyled mb-0 foo--list">
                <li className='m-3'>
                  <Link to={'/about-us'} className="text-white footer--opts ">Who We Are</Link>
                </li>
                <li className='m-3'>
                  <Link to={'/locations/raleigh/foods-and-drinks-tour#faqs'} className="text-white footer--opts">Faq</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase footer--title">Contact Us</h5>
              <ul className="list-unstyled mb-0 foo--list">
                <li className='m-3'>
                  <a
                    href={contactLinks.email}
                    className="text-white footer--opts"
                    onClick={() => trackEmailClick({ buttonLocation: 'footer' })}
                  >
                    Info@Triangle-Adventures.com
                  </a>
                </li>
                <li className='m-3'>
                  <a
                    href={contactLinks.phone}
                    className="text-white footer--opts"
                    onClick={() => trackPhoneClick({ buttonLocation: 'footer' })}
                  >
                    919-807-1368
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-2">
          © 2026 Triangle Adventures. All rights reserved
        </div>
        <div className="text-center p-2 pb-5">
          Developed by: WebSense Studio
        </div>
      </footer>
    </div>
  )
}

export default Footer;
