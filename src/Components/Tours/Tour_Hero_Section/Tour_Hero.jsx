import tourBannerSmall from '../../../assets/Tours/tour_banner-optimized-800.webp'
import tourBannerLarge from '../../../assets/Tours/tour_banner-optimized-1600.webp'
import mobileTourBannerSmall from '../../../assets/Tours/mobileTourBanner-optimized-800.webp'
import mobileTourBannerLarge from '../../../assets/Tours/mobileTourBanner-optimized-1600.webp'
import './tour_hero.css'

const Tour_Hero = () => {
  return (
    <div className="tour--container">
        <picture>
          <source 
            media="(max-width: 776px)" 
            srcSet={`${mobileTourBannerSmall} 800w, ${mobileTourBannerLarge} 1600w`}
            sizes="100vw"
            width="1600"
            height="1200"
          />
          <img 
            src={tourBannerLarge}
            srcSet={`${tourBannerSmall} 800w, ${tourBannerLarge} 1600w`}
            sizes="100vw"
            width="1600"
            height="728"
            className="banner--tour"
            alt="Triangle Adventures guided e-bike tours in the Raleigh area"
          />
        </picture>
            
        <h1 className='banner--tour--title text-white'>Raleigh Area E-Bike Tours</h1>
    </div>
  )
}

export default Tour_Hero
