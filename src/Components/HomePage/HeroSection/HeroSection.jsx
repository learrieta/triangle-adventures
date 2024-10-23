import './herosection.css'
import heroImg from '../../../assets/herosection.jpg'

const HeroSection = () => {
  return (
    <section className='section' id='#home'>
        <div className="container mt-lg-5 pt-5  my-lg-3 my-md-3 my-sm-2">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-lg-7 py-3">
              <div className="herosection--pre--title">
                <h2>SCENIC SITES, BREWERIES & MORE</h2>
              </div>
              <div className="herosection--title">
                <h3><span>Discover</span> The Triangle's Hidden Treasures</h3>
              </div>
              <div>
                <p className='herosection--paragraph'>
                  Triangle Adventures is the most fun kind of business: Started as a passion, which turned into a hobby, which turned into a business.
                </p>
                <p className='herosection--paragraph'>
                  We are a team who e-biked every weekend on the Mountains to Sea trail around the Triangle area. We kept saying how lucky we were to have such a gorgeous trail in our back yard, yet we wondered how many people live in the area that have never even been on the trail before.  
                </p>
              </div>
            </div>
            <div className="col-xs-12  col-lg-5 align-content-center py-5">
              <div className="img-exp">
                <div className="about-img">
                  <div className="img">
                    <img src={heroImg} alt="clayton clients" title='clayton activity' loading='eager' className="img-fluid aventon--img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection