import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { breadcrumbSchema } from '../data/seoSchemas'

const PrivacyPolicy = () => (
  <div className="container privacy-page">
    <SEO
      title="Privacy Policy | Triangle Adventures"
      description="Learn how Triangle Adventures handles contact details, booking links, analytics, and third-party services."
      path="/privacy-policy"
    />
    <JsonLd
      data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
      ])}
    />

    <article>
      <p className="tours--subtitle">Your information</p>
      <h1>Privacy Policy</h1>
      <p className="privacy-page__updated">Last updated July 23, 2026</p>

      <h2>Information you provide</h2>
      <p>
        When you use our contact form, we receive the name, email address, phone number,
        tour interest, and message you submit. We use this information to respond to your
        inquiry and help plan your Triangle Adventures experience.
      </p>

      <h2>Bookings and third-party services</h2>
      <p>
        Tour bookings and gift-card purchases are completed through FareHarbor. Contact-form
        messages are delivered through EmailJS. Those services process information according
        to their own privacy policies.
      </p>

      <h2>Analytics</h2>
      <p>
        We use Google Analytics to understand visits, page usage, and interactions such as
        booking, phone, and email clicks. Analytics may use cookies or similar technologies.
      </p>

      <h2>How we use and share information</h2>
      <p>
        We use personal information to answer questions, provide requested services, improve
        the website, and understand marketing performance. We do not sell personal information.
        We share information only with service providers needed to operate the website and
        fulfill your request, or when required by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You may ask what contact information we have about you or request its correction or
        deletion by emailing Info@Triangle-Adventures.com.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy may be sent to Info@Triangle-Adventures.com or
        919-807-1368.
      </p>
    </article>
  </div>
)

export default PrivacyPolicy
