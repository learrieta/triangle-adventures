import { reviews } from '../../data/reviews'
import './tourreviews.css'

const Stars = ({ rating }) => (
  <div className="tour-review-card__stars" aria-label={`${rating} out of 5 stars`}>
    {'★'.repeat(rating)}
  </div>
)

const TourReviews = ({ tourSlug }) => {
  const tourReviews = reviews.filter((review) => review.tourSlug === tourSlug)

  if (!tourReviews.length) return null

  return (
    <section className="tour-reviews" aria-labelledby={`${tourSlug}-reviews-title`}>
      <div className="container">
        <div className="text-center">
          <p className="tours--subtitle">Hear it from our Customers</p>
          <div className="tours--title">
            <h2 id={`${tourSlug}-reviews-title`}>Reviews for this tour</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {tourReviews.map((review) => (
            <article className="col-lg-4 col-md-6 mb-4" key={`${review.tourSlug}-${review.name}`}>
              <div className="tour-review-card">
                <Stars rating={review.rating} />
                <p>{review.text}</p>
                <strong>{review.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourReviews
