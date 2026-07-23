import './test_drive.css'
import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage'

const bikeGallerySizes = '(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw'

const Test_Drive = () => {
  return (
    <section>
        <div className="container pt-4">
          <div className="text-center">
            <div className="tours--title ">
              <h4 >We use <span>Aventon!</span></h4>
            </div>
            
          </div>
          <div className="row mt-lg-5">
            <div className="col-lg-6 col-md-12">
              <div className="row ">
                <div className="col-lg-6 col-md-6 col-sm-12 my-2  ">
                  <div className='image--item'>
                    <ResponsiveImage asset="Tours/a1" alt="Aventon e-bike used on Triangle Adventures tours" width="1600" height="1200" sizes={bikeGallerySizes} className='img-fluid'/>
                  </div>
                  
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2  ">
                  <div className='image--item'>
                    <ResponsiveImage asset="Tours/a2" alt="Aventon pedal-assist e-bike ready for a guided tour" width="1200" height="1600" sizes={bikeGallerySizes} className='img-fluid'/>
                  </div>
                  
                </div>
              </div>
              <div className='row'>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2  ">
                  <div className='image--item'>
                    <ResponsiveImage asset="Tours/a3" alt="Triangle Adventures Aventon e-bike on the trail" width="1200" height="1600" sizes={bikeGallerySizes} className='img-fluid'/>
                  </div>
                  
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2  ">
                  <div className='image--item'>
                    <ResponsiveImage asset="Tours/a4" alt="Aventon e-bike available for Triangle Adventures guests" width="3000" height="2766" sizes={bikeGallerySizes} className='img-fluid'/>
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div className="col-lg-6 col-md-12 align-content-center">
              <p className='aventon--paragraph '>
                Aventon Bikes offers a diverse range of stylish, high-performance electric bikes and traditional bicycles designed for urban commuting and outdoor adventures. Combining cutting-edge technology with sleek design, Aventon provides riders with an efficient and enjoyable cycling experience. <br />
                We are a premier authorized dealer for Aventon and certified by UBI as a bike mechanic. We will match the MSRP on Aventon's website, and assemble and deliver the bikes for no charge (most places charged around $200). Reach out today and schedule a test drive with us!

              </p>
            </div>
          </div>
          
          
            
        </div>
    </section>  
  )
}

export default Test_Drive
