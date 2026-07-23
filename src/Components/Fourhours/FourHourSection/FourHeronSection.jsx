
import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage'

const FourHeronSection = () => {
  return (
    <div className="tour--container">
        <ResponsiveImage asset="Aboutus/about" width="1600" height="662" sizes="100vw" className='banner--tour' loading='eager' alt='Raleigh skyline route for the Ghosts, Mystery and History tour' />
            
        <h1 className='banner--tour--title text-white'>Ghosts, Mystery, Raleigh History</h1>
    </div>
  )
}

export default FourHeronSection
