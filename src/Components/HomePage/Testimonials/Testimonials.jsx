import './testimonials.css'
import imgT1 from '../../../assets/Home/t1.png'
import imgT2 from '../../../assets/Home/t1.png'
import imgT3 from '../../../assets/Home/t1.png'
import imgT4 from '../../../assets/Home/t1.png'
import imgT5 from '../../../assets/Home/t5.png'
import imgT6 from '../../../assets/Home/t6.png'
import imgT7 from '../../../assets/Home/t7.png'
import imgT8 from '../../../assets/Home/t8.png'
import imgT9 from '../../../assets/Home/t9.png'
import reviews from '../../../assets/Home/reviews.mp4'



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
                                            <h3 className="name">Mark Franzen</h3>
                                            
                                        </div>
                                    </div>
                                    <p>Just moved to the area and we were looking for something interesting to do and this e-bike adventure was perfect for my family, so perfect even my teenage son had a good time. Participation requirements were minimal, some closed toe shoes, appropriate clothing, and a good attitude. The bikes are well maintained, easy to use after a brief test drive and explanation and then you're off to see local sites, have local food and brews, and learn local history on the way.</p>
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
                                            <h3 className="name">Jane Bragagnolo</h3>
                                            
                                        </div>
                                    </div>
                                    <p>We took the haunted history tour. 7 of us flew into town to celebrate my niece’s wedding shower. Dave and Marlo went the extra mile to make our day special, and the tour itself was so much fun, and very interesting. They are super easy to work with and really nice people.
                                        I HIGHLY recommend this tour, and I think we will be back to check the other tours they offer.
                                        The E bikes are a lot of fun too.
                                    </p>
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
                                            <h3 className="name">CJF</h3>
                                            
                                        </div>
                                    </div>
                                    <p>
                                        We did the scenic tour and it was absolutely fantastic. The e-bikes are amazing and make biking so much easier. The scenery on the trail was so beautiful. Looking forward to another tour and highly recommend one of their tours. You'll be hooked.
                                    </p>
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
                                            <h3 className="name">Jason Stevenson</h3>
                                            
                                        </div>
                                    </div>
                                    <p>Dave and Marlo were great tour guides. My wife and I have ebikes and ride the Greenways lot, but we decided to take the Taco Tour to learn more about the area and do something different.

The food was good, the tour was fun, and we learned a lot more about NC. This will be one of our go to ideas when we have family visiting from out-of-town.

Would do this again. You won't be disappointed.</p>
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
                                            <h3 className="name"> Angela Andrews</h3>
                                            
                                        </div>
                                    </div>
                                    <p>We participated in the tacos and brews tour this weekend and it was the perfect afternoon. Dave and Marlo planned a great combination of riding, history, and socializing. I highly recommend and look forward to another tour in the future!</p>
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
                                            <h3 className="name">Byron Jennings</h3>
                                            
                                        </div>
                                    </div>
                                    <p>My group and I had the best time with Triangle Adventures! We did the “Ghosts, Mystery, Raleigh History” tour. David and Marlo are incredible tour guides. They’re knowledgeable, funny, and just bring such a great energy to the tour. We heard some great and haunting stories about some of Raleigh’s most well known institutions. My friends and I will definitely be jointing them for future tours, as should you! 😀</p>
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
                                            <h3 className="name">Jessica Safford</h3>
                                            
                                        </div>
                                    </div>
                                    <p>This was an awesome experience with beautiful views on our route, delicious food & drink, and very interesting local history. Marlo & Dave are lovely tour guides, very knowledgeable and accommodating. They did a wonderful job at making sure we felt safe and confident on the e-bikes before starting the tour.
Definitely glad we booked this during our first time in the Raleigh/Clayton area. Great group, great energy.
Thanks Marlo & Dave! :)</p>
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
                                        <img src={imgT2} alt="img" loading='eager' title='e bikes customers' />
                                        <div className="text-box">
                                            <h3 className="name">Karen Stone</h3>
                                            
                                        </div>
                                    </div>
                                    <p>
                                    My friends and I did a food and drink tour out of Clayton. It was so much fun! The e-bikes are more like mopeds, so you don’t need to be in shape, but you do need to be able to balance on a bike. There were several stops along the way with interesting information about the history of Clayton. The ride along the Greenway was beautiful. We stopped at the hip El Hombre and had delicious tacos. We finished the tour with a beer at Deep River. Marlo and Dave were wonderful. We will do another one of their tours when we are in the area!
                                    </p>
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
                                        <img src={imgT4} alt="img" loading='eager' title='e bikes customers' />
                                        <div className="text-box">
                                            <h3 className="name">Yuriy Bronshteyn</h3>
                                            
                                        </div>
                                    </div>
                                    <p>
                                    Wish I could give this experience more than 5 stars. Before we had our son, my wife and I made it a point to do a bike tour of every city we visited. So for my wife's 35th bday, I found the only company that offers bike tours here in the Triangle of NC: Triangle Adventures. We did their Tacos & Beer tour and it was phenomenal! I'd say this was as good or better than anything we have experienced around the world. HIGHLY RECOMMEND! And we'll be back for any other e-bike excursions that Dave & Marlo can conjure up.
                                    </p>
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
                                        <img src={imgT3} alt="img" loading='eager' title='e bikes customers' />
                                        <div className="text-box">
                                            <h3 className="name">J Fed</h3>
                                            
                                        </div>
                                    </div>
                                    <p>
                                    My friend went on an e-bike tour with Triangle Adventures and thought I might like the "Greenery, Scenery and Mindfulness" tour. I didn't like it, I LOVED IT!

This was my 1st time on an e-bike and David explained everything from starting it to riding it. It was so much fun that I will be signing up for another tour.

We rode along the Neuse River and then continued on the path for miles. It was beautiful, peaceful and informative with Marlo giving us historical information along the way.

David and Marlo run a top notch company giving attention to the smaller details such as having water and a rain poncho in your bike's bag. It rained a bit on my ride but I opted to ride in the rain because this adventure was just exhilarating fun!
                                    </p>
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