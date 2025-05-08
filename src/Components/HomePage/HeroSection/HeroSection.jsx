import './herosection.css'
import heroImg from '../../../assets/Home/herosection.jpg'

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
                  Discover the Raleigh area like never before with Triangle Adventures, the highest rated outdoor
                  activity around! Our fun, guided tours blend local history, Greenway Trails, and delicious food
                  stops, all on easy-to-ride pedal-assisted e-bikes.                </p>
                <p className='herosection--paragraph'>
                    Whether you&#39;re craving nature, flavor, beer, or
                    ghost stories, we’ve got a ride for you. Join      us and turn an ordinary day into an unforgettable
                    experience!          </p>
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