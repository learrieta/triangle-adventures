import React from 'react'
import ebikeImg from '../../../assets/ebike.png'
import './ebike.css'

const Ebikes = () => {
  return (
    <section className="section" >
      <div className="container">
        <div className="row">
          <div className="col-xs-12  col-lg-4">
            <div className='align-content-center'>
              <img src={ebikeImg} alt="ebike" id='ebike--windows' loading='eager' title='clayton river' className="img-fluid" />
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-8 align-content-center ">
              <div className="herosection--title text-center" >
                <h3 >What is an <span>E-bike?</span></h3>
              </div>
              <div>
              <p className='herosection--paragraph text-center'>
                An e-bike (aka electric bicycle) is a bike that uses electricity to assist the rider in pedaling.
                So kick back, and let our state of the art bikes do the work for you.
              </p>
              </div>

              <div className='ebike--phone justify-content-center' >
                <img src={ebikeImg} alt="ebike" loading='eager' title='clayton river' className="img-fluid" />
              </div>
              
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Ebikes