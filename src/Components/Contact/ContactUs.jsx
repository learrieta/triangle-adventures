import React, { useRef, useState } from 'react'
import './contactus.css'
import about from '../../assets/Aboutus/contact.jpg'
import emailjs from '@emailjs/browser';
import { bookingLinks, contactLinks, socialLinks } from '../../data/bookingLinks';
import { trackBookNowClick, trackEmailClick, trackEvent, trackInstagramClick, trackPhoneClick } from '../../utils/analytics';

const helpItems = [
    {
        icon: 'bx bx-group',
        title: 'Private groups',
        text: 'Birthdays, family outings, team events, date nights, and custom group rides.',
    },
    {
        icon: 'bx bx-map-alt',
        title: 'Tour questions',
        text: 'Need help choosing Raleigh, Clayton, or Wilmington? We will point you to the best fit.',
    },
    {
        icon: 'bx bx-calendar-star',
        title: 'Special requests',
        text: 'Ask about timing, availability, route details, weather, accessibility, or larger groups.',
    },
]

const ContactUs = () => {
    const form = useRef();
    const [formStatus, setFormStatus] = useState('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current) return;

        setFormStatus('sending');
        setStatusMessage('Sending your message...');

        emailjs
        .sendForm('service_9n7nk07', 'react-portfolio', form.current, {
            publicKey: '2ew0l7CkacnMa1X5W',
        })
        .then(() => {
            trackEvent('contact_form_submit', {
                button_location: 'contact_page_form',
                destination: 'emailjs',
            });
            form.current.reset();
            setFormStatus('success');
            setStatusMessage('Thanks! Your message was sent. We will get back to you soon.');
        })
        .catch(() => {
            trackEvent('contact_form_error', {
                button_location: 'contact_page_form',
                destination: 'emailjs',
            });
            setFormStatus('error');
            setStatusMessage('Something went wrong. Please call or email us directly and we will be happy to help.');
        })
    };

  return (
    <div>
        <div className='tour--container contact--hero contact--hero-safe'>
            <img src={about} className='banner--tour contact--hero-image' loading='eager' title='Triangle Adventures contact' alt='Triangle Adventures guided e-bike tour contact page'></img>
            <div className="contact--hero-overlay"></div>
            <div className="contact--hero-content contact--hero-content-safe">
                <p className="contact--hero-eyebrow">Raleigh • Clayton • Wilmington</p>
                <h1 className='text-white contact--hero-title contact--hero-title-safe'>Contact Triangle Adventures</h1>
                <p className="contact--hero-copy">Questions about a tour, private group, or custom adventure? Send us a note and we will help you plan the right ride.</p>
            </div>
        </div>

        <section className="contact--section" id="contact">
            <div className="container">
                <div className="contact--header text-center">
                    <p className="tours--subtitle">We would love to help</p>
                    <h2 className="contact--title">Plan your next <span>Triangle Adventure</span></h2>
                    <p className="contact--trust-copy">Use the form for custom questions, or reach out directly if you need a quicker answer. We can help with tour selection, private groups, weather questions, timing, and special requests.</p>
                    <div className="contact--quick-actions">
                        <a
                            href={bookingLinks.calendar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact--primary-action"
                            onClick={() =>
                                trackBookNowClick({
                                    tourName: 'All Tours Calendar',
                                    tourSlug: 'all-tours',
                                    buttonLocation: 'contact_page_header',
                                })
                            }
                        >
                            Book a Tour
                        </a>
                        <a
                            href={contactLinks.phone}
                            className="contact--secondary-action"
                            onClick={() => trackPhoneClick({ buttonLocation: 'contact_page_header' })}
                        >
                            Call 919-807-1368
                        </a>
                    </div>
                </div>

                <div className="contact--help-grid" aria-label="Ways Triangle Adventures can help">
                    {helpItems.map((item) => (
                        <article className="contact--help-card" key={item.title}>
                            <i className={`${item.icon} contact--help-icon`}></i>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="contact--panel">
                    <div className="contact--aside">
                        <div>
                            <p className="contact--eyebrow">Fast local support</p>
                            <h3 className="ct--title">Talk with a real local guide</h3>
                            <p className="contact--aside-copy">Prefer a quick answer? Call, email, or message us on Instagram. We are happy to help you choose the right tour, plan a group experience, or answer questions before you book.</p>
                        </div>

                        <div className="contact__info">
                            <div className="contact__card">
                                <i className="bx bx-mail-send contact__card-icon"></i>
                                <div>
                                    <h3 className="contact__card-title">Email</h3>
                                    <span className="contact__card-data">Info@Triangle-Adventures.com</span>
                                </div>
                                <a
                                    href={contactLinks.email}
                                    className="contact__button"
                                    onClick={() => trackEmailClick({ buttonLocation: 'contact_page_card' })}
                                >
                                    Send an email <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                            <div className="contact__card">
                                <i className="bx bxs-phone contact__card-icon"></i>
                                <div>
                                    <h3 className="contact__card-title">Phone</h3>
                                    <span className="contact__card-data">919-807-1368</span>
                                </div>
                                <a
                                    href={contactLinks.phone}
                                    className="contact__button"
                                    onClick={() => trackPhoneClick({ buttonLocation: 'contact_page_card' })}
                                >
                                    Call us <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                            <div className="contact__card">
                                <i className="bx bxl-instagram contact__card-icon"></i>
                                <div>
                                    <h3 className="contact__card-title">Instagram</h3>
                                    <span className="contact__card-data">@triangleadventures</span>
                                </div>
                                <a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__button"
                                    onClick={() => trackInstagramClick({ buttonLocation: 'contact_page_card' })}
                                >
                                    Message us <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact__content">
                        <div className="contact--form-card">
                            <p className="contact--eyebrow">Send an inquiry</p>
                            <h3 className="ct--title">Tell us what you are planning</h3>
                            <p className="contact--form-intro">Share a few details and we will follow up with helpful next steps.</p>
                            <form ref={form} onSubmit={sendEmail} className="contact__form">
                                <div className="contact__form-row">
                                    <div className="contact__form-div">
                                        <label className="contact__form-tag">Name</label>
                                        <input type="text" name="name" className="contact__form-input" placeholder="Your name" required />
                                    </div>
                                    <div className="contact__form-div">
                                        <label className="contact__form-tag">Email</label>
                                        <input type="email" name="email" className="contact__form-input" placeholder="you@example.com" required />
                                    </div>
                                </div>
                                <div className="contact__form-row">
                                    <div className="contact__form-div">
                                        <label className="contact__form-tag">Phone</label>
                                        <input type="tel" name="user_phone" className="contact__form-input" placeholder="Your phone number" required />
                                    </div>
                                    <div className="contact__form-div">
                                        <label className="contact__form-tag">Interested in</label>
                                        <select name="tour_interest" className="contact__form-input" defaultValue="">
                                            <option value="" disabled>Select one</option>
                                            <option value="Raleigh / Clayton tour">Raleigh / Clayton tour</option>
                                            <option value="Wilmington tour">Wilmington tour</option>
                                            <option value="Private group">Private group</option>
                                            <option value="Corporate event">Corporate event</option>
                                            <option value="General question">General question</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="contact__form-div contact__form-area">
                                    <label className="contact__form-tag">Message</label>
                                    <textarea name="message" cols={30} rows={10} className="contact__form-input" placeholder="Tell us about your tour, group, date, or question" required></textarea>
                                </div>

                                {statusMessage ? (
                                    <p className={`contact__form-status contact__form-status--${formStatus}`} role="status" aria-live="polite">
                                        {statusMessage}
                                    </p>
                                ) : null}

                                <button className="data__contact" type="submit" disabled={formStatus === 'sending'}>
                                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
</div>
  )
}

export default ContactUs