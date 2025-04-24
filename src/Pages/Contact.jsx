import React from 'react'
import { Helmet } from 'react-helmet'
import ContactUs from '../Components/Contact/ContactUs'



const Contact = () => {
  return (
    <div>
        <Helmet>
                <title>Contact Us</title>
                <meta name='description' content='Contact us page for Triangle Adventures in Clayton, North Carolina' />
                <link rel='canonical' href='/contact-us' />
        </Helmet>
        <ContactUs />
        
    </div>
    
  )
}

export default Contact