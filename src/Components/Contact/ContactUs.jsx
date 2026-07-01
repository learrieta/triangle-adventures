import React, { useRef, useState } from 'react'
import './contactus.css'
import about from '../../assets/Aboutus/contact.jpg'
import emailjs from '@emailjs/browser';
import { contactLinks } from '../../data/bookingLinks';
import { trackEmailClick, trackEvent, trackPhoneClick } from '../../utils/analytics';

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
        <div className='tour--container'>
            <img src={about} className='banner--tour' loading='eager' title='Triangle Adventures contact' alt='Triangle Adventures guided e-bike tour contact page'></img>
            <h1 className='banner--tour--title text-white'>Contact Us</h1>
        </div>

        <section className="contact--section" id="contact">
            <div className="container">
                <div className="contact--header text-center">
                    <p className="tours--subtitle">We would love to help</p>
                    <h2 className="contact--title">Questions, special requests, or group events?</h2>
                    <p className="contact--trust-copy">Reach out for private tours, larger groups, corporate outings, custom requests, or general questions about riding with Triangle Adventures.</p>
                </div>

                <div className="contact--panel">
                    <div className="contact--aside">
                        <div>
                            <p className="contact--eyebrow">Fast local support</p>
                            <h3 className="ct--title">Talk with Triangle Adventures</h3>
                            <p className="contact--aside-copy">Prefer a quick answer? Call or email us directly. We are happy to help you choose the right tour, plan a group experience, or answer questions before you book.</p>
                        </div>

                        <div className="contact__info">
                            <div className="contact__card">
                                <i className="bx bx-mail-send contact__card-icon"></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">Info@Triangle-Adventures.com</span>
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
                                <h3 className="contact__card-title">Phone</h3>
                                <span className="contact__card-data">919-807-1368</span>
                                <a
                                    href={contactLinks.phone}
                                    className="contact__button"
                                    onClick={() => trackPhoneClick({ buttonLocation: 'contact_page_card' })}
                                >
                                    Call us <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact__content">
                        <div className="contact--form-card">
                            <p className="contact--eyebrow">Send an inquiry</p>
                            <h3 className="ct--title">Tell us what you are planning</h3>
                            <form ref={form} onSubmit={sendEmail} className="contact__form">
                                <div className="contact__form-div">
                                    <label className="contact__form-tag">Name</label>
                                    <input type="text" name="name" className="contact__form-input" placeholder="Your name" required />
                                </div>
                                <div className="contact__form-div">
                                    <label className="contact__form-tag">Email</label>
                                    <input type="email" name="email" className="contact__form-input" placeholder="you@example.com" required />
                                </div>
                                <div className="contact__form-div">
                                    <label className="contact__form-tag">Phone</label>
                                    <input type="tel" name="user_phone" className="contact__form-input" placeholder="Your phone number" required />
                                </div>
                                <div className="contact__form-div contact__form-area">
                                    <label className="contact__form-tag">Message</label>
                                    <textarea name="message" cols={30} rows={10} className="contact__form-input" placeholder="Tell us about your tour, group, or question" required></textarea>
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
