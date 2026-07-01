import { useEffect, useRef } from 'react'
import './homebanner.css'
import homeVideo from '../../../assets/Home/tal.mp4'
import { bookingLinks } from '../../../data/bookingLinks'
import { trackBookNowClick } from '../../../utils/analytics'

const HomeBanner = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.playsInline = true

    const playVideo = () => {
      const playPromise = video.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {})
      }
    }

    playVideo()

    const retryTimer = window.setTimeout(playVideo, 600)

    return () => window.clearTimeout(retryTimer)
  }, [])

  return (
    <div className="banner--container">
      <div className="home--video--container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-mobile-poster.jpg"
        >
          <source src="/videos/tal-mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>

      <div className="banner--content">
        <h1 className="banner--title text-white">
          <span>Tours in Raleigh,</span>
          <span>Clayton and now</span>
          <span>in Wilmington!</span>
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
