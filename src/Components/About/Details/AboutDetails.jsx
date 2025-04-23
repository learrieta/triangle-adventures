import React from 'react'
import './aboutdetails.css'
import about1 from '../../../assets/Aboutus/a1.jpg'
import about2 from '../../../assets/Aboutus/a2.jpg'
import about3 from '../../../assets/Aboutus/a3.jpg'
import marlo from '../../../assets/Aboutus/marlo.MP4'
import dave from '../../../assets/Aboutus/dave.mov'


const AboutDetails = () => {
  return (
    <div>
        <div className="container">
            <div className="row mt-lg-5 p-3  justify-content-center ">
                <div className=" col-xs-12 col-md-6 pb-3">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={about1} className="d-block w-100" alt="clayton clients" title='clayton activity' loading='eager'/>
                        </div>
                        <div className="carousel-item">
                            <img src={about2} className="d-block w-100" alt="clayton clients" title='clayton activity' loading='eager'/>
                        </div>
                        <div className="carousel-item">
                            <img src={about3} className="d-block w-100" alt="clayton clients" title='clayton activity' loading='eager'/>
                        </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                
            </div>

            <section className='section--tours'>
                    <div className="container">
                        <div className="text-center">
                            <p className="tours--subtitle">We will take you to breathtaking places</p>
                            <div className="tours--title">
                            <h3 >Meet Our <span>Guides</span></h3>
                            </div>
                            
                        </div>
                    
                        <div className="row  align-items-center">
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="fullscreen-video-c">
                                    <video autoPlay loop muted src={dave}></video>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <h4 className="w--title"><span>Say hello to</span> Dave!</h4>
                                <p className="dave--paragraph">
                                    Hey everyone! My name is Dave and I’m excited to be your guide on our adventures. I’m an exercise and fitness enthusiast, but also a certified couch potato and TV buff in my down time. I’m a car enthusiast, amateur audiophile, love to cook, and am an avid dog dad. Look forward to meeting you out there on the trail!
                                </p>
                            </div>
                        </div>
                        <div className="row  align-items-center">
                           
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <h4 className="w--title"><span>Say hello to</span> Marlo!</h4>
                                <p className="dave--paragraph">
                                    Hello fellow e-bike adventurers! My name is Marlo, one of two amazing tour guides here at Triangle Adventures. I am originally from California and found my way to the beautiful North Carolina Triangle 19 years ago. I enjoy spending my free time on the beautiful Mountains to Sea trail running, biking, and e biking. My additional interests are my 3 dogs, watching my husband cook, and learning history about the trails and towns we ride through. I am happy to share portions of this beautiful trail and their history to our local friends, family and visitors to the Triangle area.
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="fullscreen-video-c">
                                    <video autoPlay loop muted src={marlo}></video>
                                </div>
                            </div>
                        </div>
                    
                    
                    
                    </div>
            </section>  
        </div>
    </div>
  )
}

export default AboutDetails