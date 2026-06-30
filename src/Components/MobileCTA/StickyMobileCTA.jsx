import { bookingLinks, contactLinks } from '../../data/bookingLinks'
import { trackBookNowClick, trackPhoneClick } from '../../utils/analytics'
import './stickyMobileCTA.css'

const StickyMobileCTA = () => {
  return (
    <div className="sticky-mobile-cta" aria-label="Quick booking actions">
      <a
        className="sticky-mobile-cta__secondary"
        href={contactLinks.phone}
        onClick={() => trackPhoneClick({ buttonLocation: 'sticky_mobile_cta' })}
      >
        Call
      </a>
      <a
        className="sticky-mobile-cta__primary"
        href={bookingLinks.calendar}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackBookNowClick({
            tourName: 'All Tours Calendar',
            tourSlug: 'all-tours',
            buttonLocation: 'sticky_mobile_cta',
          })
        }
      >
        Book a Tour
      </a>
    </div>
  )
}

export default StickyMobileCTA
