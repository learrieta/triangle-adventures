import './pictures.css'
import hp1 from '../../../assets/Home/hp1.jpg'
import hp6 from '../../../assets/Home/hp6.png'
import hp8 from '../../../assets/Home/hp8.jpg'
import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage'

const gallerySizes = '(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw'

const Pictures = () => {
  return (
    <section>
        <div className="container pt-4">
            <div className="text-center">
                <p className="tours--subtitle"><i className="fa-brands fa-instagram fa-xl" style={{color: '#f9b717'}}></i> triangle adventures</p>
                <div className="instagram--title">
                  <h4 >Use The Hashtag <span>#TriangleAdventures</span></h4>
                </div>
                <p className="tours--subtitle">For a chance to have your picture featured on our home page!</p>
            </div>
            <div className="row  ">
              
              <div className="col-lg-3 col-md-6 col-sm-12 my-2   ">
                <div className='image--item'>
                  <img src={hp1} width="1200" height="1600" alt="Guests riding e-bikes on a Triangle Adventures tour" loading='lazy' decoding="async" className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <ResponsiveImage asset="Home/hp2" alt="Triangle Adventures guests posing with their e-bikes" width="1600" height="1200" sizes={gallerySizes} className="card--img" style={{ height: '242px', width: '100%' }} />
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <ResponsiveImage asset="Home/hp3" alt="E-bike riders enjoying a guided North Carolina adventure" width="1600" height="1200" sizes={gallerySizes} className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <ResponsiveImage asset="Home/hp4" alt="Friends enjoying a stop during a Triangle Adventures tour" width="1600" height="1200" sizes={gallerySizes} className='img-fluid'/>
                </div>
                
              </div>
              
              
              
            </div>
            <div className="row ">
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <ResponsiveImage asset="Home/hp5" alt="Triangle Adventures riders exploring a scenic greenway" width="1600" height="1200" sizes={gallerySizes} className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <img src={hp6} width="704" height="530" alt="Guests gathered during a Triangle Adventures e-bike tour" loading='lazy' decoding="async" className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <ResponsiveImage asset="Home/hp7" alt="E-bike tour guests stopping for a group photo" width="1600" height="1200" sizes={gallerySizes} className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <img src={hp8} width="1200" height="1600" alt="Guided e-bike tour riders enjoying the trail" loading='lazy' decoding="async" className='img-fluid'/>
                </div>
                
              </div>
              
            </div>
        </div>
    </section>    
  )
}

export default Pictures
