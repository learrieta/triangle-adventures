import React from 'react'
import hp1 from '../../../assets/Home/v.png'

import hp3 from '../../../assets/Home/dr.png'
import './partners.css'
const Partners = () => {
  return (
    <section>
        <div className="container pt-4">
            <div className="text-center">
                <div className="instagram--title">
                  <h4 >Our<span>Partners</span></h4>
                </div>
            </div>
            <div className="row ">
              
              <div className="col-lg-6 col-md-6 col-sm-12 my-2  px-lg-5 ">
                <div className='partner--item '>
                  <img src={hp1} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                </div>
                
              </div>
              
              <div className="col-lg-6 col-md-6 col-sm-12 my-2 px-lg-5 ">
                <div className='partner--item'>
                  <img src={hp3} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                </div>
                
              </div>
            </div>
            
        </div>
    </section>    
  )
}

export default Partners


