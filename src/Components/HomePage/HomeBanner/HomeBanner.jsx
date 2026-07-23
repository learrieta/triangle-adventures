import { useEffect, useRef, useState } from 'react'
import './homebanner.css'
import { bookingLinks } from '../../../data/bookingLinks'
import { trackBookNowClick } from '../../../utils/analytics'

const HomeBanner = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.playsInline = true

    const playVideo = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        video.pause()
        setIsPlaying(false)
        return
      }

      const playPromise = video.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => setIsPlaying(false))
      }
    }

    playVideo()

    const retryTimer = window.setTimeout(playVideo, 600)

    return () => window.clearTimeout(retryTimer)
  }, [])

  const toggleVideo = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {})
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="banner--container">
      <div className="home--video--container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-mobile-poster.jpg"
          aria-label="Triangle Adventures e-bike tour highlights"
        >
          <source src="/videos/tal-mobile.mp4" type="video/mp4" />
        </video>
        <button
          className="home-video-toggle"
          type="button"
          onClick={toggleVideo}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          aria-pressed={!isPlaying}
        >
          {isPlaying ? 'Pause video' : 'Play video'}
        </button>
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
