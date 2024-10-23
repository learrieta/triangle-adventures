import './testimonials.css'
import imgT1 from '../../../assets/t1.png'
import imgT2 from '../../../assets/t2.png'
import imgT3 from '../../../assets/t3.png'
import imgT4 from '../../../assets/t4.png'
import imgT5 from '../../../assets/t5.png'
import imgT6 from '../../../assets/t6.png'
import imgT7 from '../../../assets/t7.png'
import imgT8 from '../../../assets/t8.png'
import imgT9 from '../../../assets/t9.png'
import reviews from '../../../assets/reviews.mp4'



const Testimonials = () => {
  return (
    <section>
        <div className="container pt-4">
            <div className="text-center">
                <p className="tours--subtitle">Hear it from our Customers</p>
                <div className="tours--title">
                <h2 ><span>Adventurers</span> Reviews</h2>
                </div>
            </div>

            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-sm-12 col-xs-12">
                    <div className="fullscreen-video-container">
                        <video autoPlay loop muted src={reviews}></video>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 col-xs-12">
                    <div id="carouselExampleControls" className="carousel px-lg-5 mx-lg-5 slide carousel-fade" data-bs-ride="carousel">
                    
                        <div className="carousel-inner">
                            
                            <div className="carousel-item active">
                                <div className="testimonials-item">
                                    <div className="info">
                                        <img src={imgT1} alt="img" loading='eager' title='e bikes customers' />
                                        <div className="text-box">
                                            <h3 className="name">Betsy H.</h3>
                                            
                                        </div>
                                    </div>
                                    <p>Loved our Triangle Adventure tour! It was very simple to operate the e-bikes. I really like that you can easily operate the bikes by peddling and or have the bike work for you…you tailor it to your needs. The history they shared was very interesting and relevant.</p>
                                    <div className="rating">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="carousel-item">
                                <div className="testimonials-item">
                                    <div className="info">
                                        <img src={imgT5} alt="img" loading='eager' title='e bikes customers' />
                                        <div className="text-box">
                                            <h3 className="name">Jaime N.</h3>
                                            
                                        </div>
                                    </div>
                                    <p>I had an absolutely incredible experience with Triangle Adventures e-bike tour! From start to finish, the day was filled with fun, facts, delicious food, and beautiful scenery. Our tour guides were phenomenal. Their passion for the area was infectious.</p>
                                    <div className="rating">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonials-item">
                                    <div className="info">
                                        <img src={imgT6} alt="img" loading='eager' title='e bikes customers' />
                                        <div className="text-box">
                                            <h3 className="name">Kristin R.</h3>
                                            
                                        </div>
                                    </div>
                                    <p>Easily one of the best activities in Clayton! I had a blast on our Tacos, Taps, and Local Facts tour. It was my first time riding an e-bike and I was a bit hesitant, but Daves excellent tutorial quickly put me at ease—it felt natural in no time.</p>
                                    <div className="rating">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonials-item">
                                    <div className="info">
                                        <img src={imgT7} alt="img" loading='eager' title='e bikes customers' />
                                        <div className="text-box">
                                            <h3 className="name">AJ F.</h3>
                                            
                                        </div>
                                    </div>
                                    <p>Wow! What a truly incredible adventure and definitely a much needed activity in the Triangle!! Dave and Marlo were lovely tour guides and planned out a perfect itinerary for the day.</p>
                                    <div className="rating">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonials-item">
                                    <div className="info">
                                        <img src={imgT8} alt="img" loading='eager' title='e bikes customers' />
                                        <div className="text-box">
                                            <h3 className="name"> Jack S.</h3>
                                            
                                        </div>
                                    </div>
                                    <p>My wife and I did this in Clayton and it was fantastic. The best part was I did not have to pedal. The food and drink stop where great.</p>
                                    <div className="rating">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonials-item">
                                    <div className="info">
                                        <img src={imgT9} alt="img" loading='eager' title='e bikes customers' />
                                        <div className="text-box">
                                            <h3 className="name">Nancy M.</h3>
                                            
                                        </div>
                                    </div>
                                    <p>My husband and I did some intense research on e-bikes and found  Aventon bikes to be one of our top choices. It had great reviews and durability. I reached out to Triangle Adventures and was excited they were having an event that offered the opportunity for a test ride.</p>
                                    <div className="rating">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            
            
        </div>
    </section>
   
  )
}

export default Testimonials