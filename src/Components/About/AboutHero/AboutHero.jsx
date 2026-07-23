import './abouthero.css'
import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage'

const AboutHero = () => {
  return (
    <div className='tour--container'>
        <ResponsiveImage asset="Aboutus/about" width="1600" height="662" sizes="100vw" className='banner--tour' loading='eager' alt='Clayton sunset on a Triangle Adventures tour route' />
             
        <h1 className='banner--tour--title text-white'>About us</h1>
    </div>
  )
}

export default AboutHero
