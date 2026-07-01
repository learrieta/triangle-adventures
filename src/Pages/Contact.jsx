import ContactUs from '../Components/Contact/ContactUs'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { breadcrumbSchema } from '../data/seoSchemas'

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact Triangle Adventures | Raleigh, Clayton & Wilmington E-Bike Tours"
        description="Contact Triangle Adventures for guided e-bike tours, private groups, corporate events, special requests, and questions about Raleigh, Clayton, Wilmington, and Triangle area adventures."
        path="/contact-us"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact-us' },
        ])}
      />
      <ContactUs />
    </div>
  )
}

export default Contact