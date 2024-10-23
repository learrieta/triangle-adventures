import React from 'react'
import './test_drive.css'
import aventon_one from '../../../assets/a1.jpg'
import aventon_two from '../../../assets/a2.jpg'
import aventon_three from '../../../assets/a3.jpg'
import aventon_four from '../../../assets/a4.jpg'

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
                    <img src={aventon_one} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                  </div>
                  
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2  ">
                  <div className='image--item'>
                    <img src={aventon_two} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                  </div>
                  
                </div>
              </div>
              <div className='row'>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2  ">
                  <div className='image--item'>
                    <img src={aventon_three} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                  </div>
                  
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2  ">
                  <div className='image--item'>
                    <img src={aventon_four} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
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