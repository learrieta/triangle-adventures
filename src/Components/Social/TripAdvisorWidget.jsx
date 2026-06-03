import './socialembeds.css'

const TRIPADVISOR_URL = 'https://www.tripadvisor.com/Attraction_Review-g49463-d27435815-Reviews-Triangle_Adventures-Raleigh_North_Carolina.html'

const TripAdvisorWidget = () => (
  <section className="trust-widget" aria-labelledby="tripadvisor-title">
    <div className="container text-center">
      <p className="tours--subtitle">Trusted by adventurers</p>
      <div className="tours--title">
        <h2 id="tripadvisor-title">See more reviews on Tripadvisor</h2>
      </div>
      <p className="trust-widget__copy">
        See what recent guests are saying about Triangle Adventures, then book your own guided e-bike tour across the Triangle area.
      </p>
      <a
        className="large--button"
        href={TRIPADVISOR_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Tripadvisor Reviews
      </a>
    </div>
  </section>
)

export default TripAdvisorWidget
