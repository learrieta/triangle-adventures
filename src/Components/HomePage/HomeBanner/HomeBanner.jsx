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
        <div className="banner--headline-group">
          <h1 className="banner--title text-white">
            The Triangle&apos;s
            <br /> only E-Bike <br />
            Touring Company.
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
    </div>
  )
}

export default HomeBanner
