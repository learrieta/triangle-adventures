import './rent.css'
import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage'
const Rent = () => {
  return (
    <section>
        <div className="container pt-5">
            <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-6 align-content-center ">
                    <div className="aventon--title text-center" >
                        <h3 > Aventon E-Bike <span>Test Drives (FREE)</span></h3>
                    </div>
                    <div>
                        <p className='aventon--paragraph text-center'>
                            Thinking about buying an e-bike but want to try one out first? We are an Authorized Dealer, and regularly host FREE test drive days. Message us for dates and more info. It’s a blast.
                        </p>
                    </div>

                    
                    
                </div>
                <div className="col-xs-12  col-lg-6 p-3  align-content-center ">
                    <div className="img-exp">
                        <div className="about-img">
                            <div className="img">
                                <ResponsiveImage asset="Home/aventon" width="1600" height="900" sizes="(max-width: 991px) 100vw, 50vw" alt="Aventon e-bike available for a free test drive in Clayton" className="img-fluid aventon--img" />
                            </div>
                        </div>
                    </div>
                </div>
            
            
            </div>
        </div>
    </section>
  )
}

export default Rent
