import './pictures.css'
import hp1 from '../../../assets/hp1.jpg'
import hp2 from '../../../assets/hp2.jpg'
import hp3 from '../../../assets/hp3.jpg'
import hp4 from '../../../assets/hp4.jpg'
import hp5 from '../../../assets/hp5.jpg'
import hp6 from '../../../assets/hp6.png'
import hp7 from '../../../assets/hp7.jpg'
import hp8 from '../../../assets/hp8.jpg'

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
                  <img src={hp1} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <img src={hp2} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <img src={hp3} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <img src={hp4} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                </div>
                
              </div>
              
              
              
            </div>
            <div className="row ">
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <img src={hp5} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <img src={hp6} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <img src={hp7} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2  ">
                <div className='image--item'>
                  <img src={hp8} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                </div>
                
              </div>
              
            </div>
        </div>
    </section>    
  )
}

export default Pictures