import '../TwoHours/QuickDetails/quickdetails.css'
import './wilmington.css'
import { bookingLinks } from '../../data/bookingLinks'
import { trackBookNowClick } from '../../utils/analytics'
import img1 from '../../assets/2hour/2.1.png'
import img2 from '../../assets/2hour/2.2.png'
import img3 from '../../assets/2hour/2.3.jpg'

const iconStyle = { color: '#f9b717', width: '30px' }

const WilmingtonTrueCrimeDetails = () => {
  return (
    <section className="section">
      <div className="container mt-lg-3 pt-3 my-lg-3 my-md-3 my-sm-2">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row background--color wilmington-details-card">
              <div className="new-tour-inline-badge">Featured Tour</div>
              <h3 className="details--title">Quick Details</h3>
              <ul className="details--list">
                <li><i className="fa-regular fa-hourglass-half" style={iconStyle}></i>Duration: 3 hours</li>
                <li><i className="fa-solid fa-location-arrow" style={iconStyle}></i>Location: 1101 Hill Street, Wilmington NC</li>
                <li><i className="fa-solid fa-user-group" style={iconStyle}></i>Capacity: 8 riders</li>
                <li><i className="fa-regular fa-clock" style={iconStyle}></i>Times: Varies, Check the Calendar</li>
                <li><i className="fa-solid fa-circle-exclamation" style={iconStyle}></i>Ages: 15+</li>
                <li><i className="fa-solid fa-dollar-sign" style={iconStyle}></i>85 per person</li>
              </ul>
              <p className="wilmington-warning">
                Warning: some adult topics. This is not your grandma&apos;s history lesson.
              </p>
              <div className="center--the--button">
                <a
                  type="button"
                  className="tours--button--navbar"
                  href={bookingLinks.wilmingtonTrueCrime}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackBookNowClick({
                      tourName: 'Wilmington: True Crime & Weird History',
                      tourSlug: 'wilmington-true-crime-tour',
                      buttonLocation: 'wilmington_true_crime_quick_details',
                    })
                  }
                >
                  Check Calendar
                </a>
              </div>
            </div>

            <div className="row mt-lg-5 my-sm-5 pt-lg-4 mt-md-3 pt-md-2">
              <h4 className="about--the--adventure text-center">About <span>The Adventure</span></h4>
              <p className="wilmington-intro text-center">
                The stories your history teacher skipped. Explore Wilmington&apos;s most infamous crimes, bizarre legends, forgotten scandals, and strange local history as you explore Historic Downtown, Greenfield Lake, the Cargo District, and other unforgettable stops.
              </p>

              <div className="wilmington-highlight-grid">
                <div className="wilmington-highlight-card">Effortlessly e-bike approximately 13 miles.</div>
                <div className="wilmington-highlight-card">Stops in classic Wilmington locations, on and off the beaten path.</div>
                <div className="wilmington-highlight-card">Immersive digital videos, wild facts, and fascinating history.</div>
                <div className="wilmington-highlight-card">Tour can last between 3-4 hours.</div>
              </div>

              <ul className="nav nav-tabs nav-justified mb-3 nav--list--i pt-lg-3 pt-md-2 pt-sm-1" id="wilmington-tour-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="wilmington-tab-1" data-bs-toggle="tab" href="#wilmington-tabs-1" role="tab" aria-controls="wilmington-tabs-1" aria-selected="true">Itinerary</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="wilmington-tab-2" data-bs-toggle="tab" href="#wilmington-tabs-2" role="tab" aria-controls="wilmington-tabs-2" aria-selected="false">What We Provide</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="wilmington-tab-3" data-bs-toggle="tab" href="#wilmington-tabs-3" role="tab" aria-controls="wilmington-tabs-3" aria-selected="false">The Ride</a>
                </li>
              </ul>

              <div className="tab-content" id="wilmington-tour-content">
                <div className="tab-pane fade show active itinerary--text--config" id="wilmington-tabs-1" role="tabpanel" aria-labelledby="wilmington-tab-1">
                  Coming soon. Triangle Adventures is expanding from the Raleigh area to Wilmington, with the official tour launch planned for March 2027. Meet your experienced guides at 1101 Hill Street, Wilmington, near the black metal gates and Triangle Adventures Garage area.<br /><br />
                  After check-in and a brief safety tutorial, we will do quick orientation rides so everyone feels comfortable on the bikes. From there, the group begins an easy ride on the Connector Bike Trail to Forest Hills, then toward Historic Downtown, Greenfield Lake, the Cargo District, and back to the starting point.<br /><br />
                  Along the way, expect stories about a radical social experiment gone wrong, unsolved murder mysteries, a local Civil War spy, local unsung heroes, and a few weird and wild surprises.
                </div>
                <div className="tab-pane fade itinerary--text--config" id="wilmington-tabs-2" role="tabpanel" aria-labelledby="wilmington-tab-2">
                  We provide a state-of-the-art pedal assisted e-bike with throttle, a clean disinfected helmet, neck warmer and gloves if needed, a bike bag for small belongings, bottled water, and a fun knowledgeable tour guide. Please bring comfortable clothes, closed-toe shoes, sunglasses, sunscreen, a small backpack or fanny pack, photo ID, phone, and a smile.
                </div>
                <div className="tab-pane fade itinerary--text--config" id="wilmington-tabs-3" role="tabpanel" aria-labelledby="wilmington-tab-3">
                  This guided e-bike tour is approximately 13 miles long at a leisurely pace. The adventure lasts between 3-4 hours and includes plenty of breaks and photo opportunities. The bikes are motorized, so riders of many activity levels can enjoy the experience without doing the work of pedaling.
                </div>
              </div>
            </div>

            <div className="p-4">
              <h4 className="faq--the--adventure text-center">More <span>Tour Details</span></h4>
              <p className="text-center itinerary--text--config mb-5">
                Good for any fitness level. No pedaling required. The e-bikes do the work for you.
              </p>

              <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 faqs--the--adventure"><i className="far fa-paper-plane pe-2" style={{ color: 'rgb(249, 183, 23)' }}></i>Equipment</h6>
                  <p className="faq--text--config">All participants receive a pedal-assisted Aventon e-bike and helmet. Dress in layers because it can feel cooler while riding.</p>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 faqs--the--adventure"><i className="far fa-paper-plane pe-2" style={{ color: 'rgb(249, 183, 23)' }}></i>Group Size</h6>
                  <p className="faq--text--config">Groups are limited to 8 participants aged 15 and up to keep the ride safe, personal, and memorable.</p>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 faqs--the--adventure"><i className="far fa-paper-plane pe-2" style={{ color: 'rgb(249, 183, 23)' }}></i>Weather</h6>
                  <p className="faq--text--config">Tours generally take place in light rain or shine. If weather is inclement, we will contact you with alternate arrangements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-6 col-xs-6 image--item--pad">
                <img src={img1} alt="Triangle Adventures e-bike tour" title="Wilmington e-bike tour" loading="eager" className="img-fluid" />
              </div>
              <div className="col-lg-12 col-md-6 col-sm-6 col-xs-6 image--item--pad">
                <img src={img2} alt="Triangle Adventures guided e-bike ride" title="Wilmington guided e-bike ride" loading="eager" className="img-fluid" />
              </div>
              <div className="col-lg-12 col-md-6 col-sm-6 col-xs-6 image--item--pad">
                <img src={img3} alt="Triangle Adventures scenic e-bike route" title="Wilmington: True Crime & Weird History" loading="eager" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WilmingtonTrueCrimeDetails