import './homebanner.css'
import homeVideo from '../../../assets/Home/tal.mp4'
import { bookingLinks } from '../../../data/bookingLinks'
import { trackBookNowClick } from '../../../utils/analytics'

const HomeBanner = () => {
  return (
    <div className="banner--container">
      <div className="home--video--container">
        <video autoPlay loop muted playsInline preload="metadata" src={homeVideo}></video>
      </div>

      <div className="banner--content">
        <h1 className="banner--title text-white">
          <span>The Triangle&apos;s</span>
          <span>only E-Bike</span>
          <span>Touring Company.</span>
        </h1>
        <a
          type="button"
          className="large--button"
          href={bookingLinks.calendar}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackBookNowClick({
              tourName: 'All Tours Calendar',
              tourSlug: 'all-tours',
              buttonLocation: 'homepage_hero',
            })
          }
        >
          Book a Tour!
        </a>
      </div>
    </div>
  )
}

export default HomeBanner
