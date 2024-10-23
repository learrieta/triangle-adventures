import React from 'react'
import './tour_banner.css'
import heroImg  from '../../../assets/tour_hero.jpg'


const Tour_Banner = () => {
  return (
    <section className='section' id='#tours'>
        <div className="container mt-lg-5 pt-5  my-lg-3 my-md-3 my-sm-2">
          <div className="row">
          <div className="col-xs-12  col-lg-5 align-content-center p-5">
              <div className="img-exp">
                <div className="about-img">
                  <div className="img">
                    <img src={heroImg} alt="clayton clients" title='clayton activity' loading='eager' className="img-fluid tour--banner--img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-12 col-lg-7 py-3 align-content-center">
              <div className="herosection--pre--title">
                <h2>PERFECT FOR SMALL OR LARGE GROUPS</h2>
              </div>
              <div className="herosection--title">
                <h3><span>Kick back</span> and relax with a scenic e-bike tour</h3>
              </div>
              <div>
                <p className='herosection--paragraph'>
                Families, couples, singles, team builders, bachelor / bachelorette parties, vacationers, staycationers, or anyone wanting to try something new and exciting... Our adventures are for everyone and accommodate any fitness level, as long as you can ride a bike. (Please reach out ahead of time to book large groups, see FAQ for more details.)
                </p>
                
              </div>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Tour_Banner