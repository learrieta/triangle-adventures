
import './quickdetails.css'
import img1 from '../../../assets/4hour/4.1.png'
import img2 from '../../../assets/4hour/4.2.jpg'
import img3 from '../../../assets/4hour/4.3.jpg'
import img4 from '../../../assets/4hour/4.4.jpg'
import img5 from '../../../assets/4hour/4.5.jpg'
import img6 from '../../../assets/4hour/4.6.jpg'



const QuickDetails = () => {
    
    
  return (
    <section className='section'>
        <div className="container mt-lg-3 pt-3  my-lg-3 my-md-3 my-sm-2">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 ">
                    <div className="row  background--color">
                        <h3 className='details--title'>Quick Details </h3>
                        <ul className='details--list'>
                            <li><i className="fa-regular fa-hourglass-half" style={{color: "#f9b717", width: "30px",}}></i>Duration: 3 hours</li>
                            <li><i className="fa-solid fa-location-arrow" style={{color: "#f9b717", width: "30px",}}></i>Location: Raleigh, North Carolina</li>
                            <li><i className="fa-solid fa-user-group" style={{color: "#f9b717", width: "30px",}}></i>Capacity: 10 riders</li>
                            <li><i className="fa-regular fa-clock" style={{color: "#f9b717", width: "30px",}}></i> Times: Varies, Check the Calendar</li>
                            <li><i className="fa-solid fa-circle-exclamation" style={{color: "#f9b717", width: "30px",}}></i> Ages: 15+ </li>
                            <li><i className="fa-solid fa-dollar-sign" style={{color: "#f9b717", width: "30px",}}></i> 85 per person </li>
                        </ul>
                        <div className="center--the--button">
                            <a type="button" className="tours--button--navbar" href="https://fareharbor.com/embeds/book/triangleadventures/items/584144/?full-items=yes&amp;flow=1269994&amp;from-ssl=yes&amp;ga4t=AW-16453875434%2Cundefined__undefined%3B&amp;g4=yes&amp;cp=no&amp;csp=no&amp;back=https%3A%2F%2Fwww.triangle-adventures.com%2F4-hour-tour%2F&amp;language=en-us&amp;u=9b6d5aac-5806-4561-af48-c70f8e3bcf8c">
                                Book Now!
                            </a>
                        </div>
                    </div>

                    <div className="row mt-lg-5 my-sm-5 pt-lg-4 mt-md-3 pt-md-2 ">
                        <h4 className='about--the--adventure text-center '>About <span>The Adventure</span> </h4>
                        <ul className="nav nav-tabs nav-justified mb-3 nav--list--i pt-lg-3 pt-md-2 pt-sm-1" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link active"
                                    id="ex3-tab-1"
                                    data-bs-toggle="tab"
                                    href="#ex3-tabs-1"
                                    role="tab"
                                    aria-controls="ex3-tabs-1"
                                    aria-selected="true"
                                >
                                    Itinerary
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link"
                                    id="ex3-tab-2"
                                    data-bs-toggle="tab"
                                    href="#ex3-tabs-2"
                                    role="tab"
                                    aria-controls="ex3-tabs-2"
                                    aria-selected="false"
                                >
                                    Equipment
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link"
                                    id="ex3-tab-3"
                                    data-bs-toggle="tab"
                                    href="#ex3-tabs-3"
                                    role="tab"
                                    aria-controls="ex3-tabs-3"
                                    aria-selected="false"
                                >
                                    The Ride
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content" id="ex2-content">
                            <div
                                className="tab-pane fade show active itinerary--text--config"
                                id="ex3-tabs-1"
                                role="tabpanel"
                                aria-labelledby="ex3-tab-1"
                            >
                               Meet your experienced guides next to our Triangle Adventures truck and trailer in the bus parking lot
                                near the West Building (from main entrance of museum, turn left and follow the road).<br/>

                                After a brief safety meeting, we do some quick orientation rides to make sure everyone feels
                                comfortable on the bikes. We start with a true ghost story about an Art Museum haunting. Once we
                                embark as a group from there, we begin our ride down the beautiful NC Greenway &quot;Art to Heart&quot; Trail.<br/>

                                Our first stop is Meredith College, which is known as one of the most haunted colleges in America. We
                                will show you exactly why (no spoilers)! From there we continue our journey down to Dorothea Dix Park
                                and we visit and have some WILD stories about the old Insane Asylum and cemeteries nearby.
                                We have a couple other stops for some ghost stories and interesting local history, then circle back
                                around to NC State Campus and back to the Greenway trail, eventually returning to the NC Art Museum.<br/>

                                For anyone that likes a fun e-bike ride, some beautiful scenery, local history, and wild ghost stories... this
                                tour is for you.
                            </div>
                            <div className="tab-pane fade itinerary--text--config" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">
                                All participants will be provided with a pedal assisted Aventon eBike and a bike helmet for their trip. Participants of all fitness levels can enjoy an easy and fun ride, as you control how much (or little) effort you exert. Please dress in layers as it always feels much cooler on the eBikes. The bikes may not have storage so participants should bring a backpack or waist pack to store belongings and a snack or a bottle of water.
                            </div>
                            <div className="tab-pane fade itinerary--text--config" id="ex3-tabs-3" role="tabpanel" aria-labelledby="ex3-tab-3">
                            The guided e-bike tour is approximately 13-miles long, a leisurely-paced tour. The adventure lasts around 3 hours and includes plenty of breaks and photo ops. The bikes are motorized, allowing participants of all activity levels to experience a fun ride without the work of pedaling.
                            </div>
                        </div>
                        <div className='p-4'>
                    <h4 className='faq--the--adventure text-center '> Frequently <span>Asked Questions</span> </h4>
                        <p class="text-center  itinerary--text--config mb-5">
                            We aim to craft the perfect day where every guest departs with a sense of awe and wonder for this incredible area
                        </p>

                        <div class="row">
                            <div class="col-md-6 col-lg-4 mb-4">
                                <h6 class="mb-3 faqs--the--adventure">
                                    <i class="far fa-paper-plane   pe-2" style={{color: 'rgb(249, 183, 23) ',}}></i> 
                                    What if there is severe weather?
                                </h6>
                                <p className='faq--text--config'>
                                    Safety is our number one priority, so if weather is severe, we will communicate that out to our riders prior to the adventure beginning. We normally run rain or shine, so as long as the weather is not severe, we will still run the tours.
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4">
                                <h6 class="mb-3 faqs--the--adventure">
                                    <i class="far fa-paper-plane   pe-2" style={{color: 'rgb(249, 183, 23) ',}}></i> 
                                    What is the cancellation policy?
                                </h6>
                                <p className='faq--text--config'>
                                        Full refunds will be given if cancellations are made 72 hours ahead of time. If less than 72 hours
                                        ahead of time, a 50% refund will be given. Rescheduling is always preferred, but refunds will be
                                        given when rescheduling is not possible. 
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4">
                                <h6 class="mb-3 faqs--the--adventure">
                                    <i class="far fa-paper-plane   pe-2" style={{color: 'rgb(249, 183, 23) ',}}></i> 
                                    Will there be parking at the starting point?
                                </h6>
                                <p className='faq--text--config'>
                                    Absolutely. But some of the places we meet may have a limited amount of parking spots, so
                                    carpooling is preferred whenever possible.
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4">
                                <h6 class="mb-3 faqs--the--adventure">
                                    <i class="far fa-paper-plane   pe-2" style={{color: 'rgb(249, 183, 23) ',}}></i> 
                                    Can I purchase new bikes through you?
                                </h6>
                                <p className='faq--text--config'>
                                    Absolutely. We are an authorized dealer with Aventon E-Bikes. If you ride a bike that you love,
                                    you can ask to purchase through us and we can even build it for you. We also keep some brand
                                    new bikes in stock, pre-built, ready for purchase. Just ask and we can give you all the details.
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4">
                                <h6 class="mb-3 faqs--the--adventure">
                                    <i class="far fa-paper-plane   pe-2" style={{color: 'rgb(249, 183, 23) ',}}></i> 
                                    How do the test drives work?
                                </h6>
                                <p className='faq--text--config'>
                                    On certain days throughout the year, we offer FREE test drives. Just sign up, come out, and try
                                    out the bikes for free. No gimmicks, no hidden fees. Test drives typically last about 10 minutes. 
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4">
                                <h6 class="mb-3 faqs--the--adventure">
                                    <i class="far fa-paper-plane   pe-2" style={{color: 'rgb(249, 183, 23) ',}}></i> 
                                    Can I bring my own equipment?
                                </h6>
                                <p className='faq--text--config'>
                                    You can certainly bring your own helmet, as long as it is a CPSC certified bike helmet, however
                                    we provide disinfected helmets. If you have your own E-Bike and are looking to use it on an
                                    adventure, please contact us first and let us know.
                                </p>
                            </div>

                            
                        </div>
                    </div>
                        
                    </div>
                     

                    
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="row">
                        <div className='col-lg-12 col-md-6 col-sm-6 col-xs-6 image--item--pad'>
                            <img src={img1} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                        </div>
                        <div className='col-lg-12 col-md-6 col-sm-6 col-xs-6 image--item--pad'>
                            <img src={img2} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                        </div>
                        <div className='col-lg-12 col-md-6 col-sm-6 col-xs-6 image--item--pad'>
                            <img src={img3} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                        </div>
                        <div className='col-lg-12 col-md-6 col-sm-6 col-xs-6 image--item--pad'>
                            <img src={img4} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                        </div>
                        <div className='col-lg-12 col-md-6 col-sm-6 col-xs-6 image--item--pad'>
                            <img src={img5} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                        </div>
                        <div className='col-lg-12 col-md-6 col-sm-6 col-xs-6 image--item--pad'>
                            <img src={img6} alt="image" title='clayton fun activities'  loading = 'eager' className='img-fluid'/>
                        </div>
                        
                        
                    </div>
                    
                    
                    
                    
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default QuickDetails