import React from 'react'
import './partners.css'
import { vinsonImage } from './vinsonImage'

const revivalImage = 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_632,q_75,w_640/v1/crm/johnstoncounty/Revival-6-1-_B358E758-9B0F-A367-D5BFA4B1A6FA6B38-b358df4bbae79f2_b358ece2-a8b7-fa56-27662d65877137e5.jpg'

const partners = [
  {
    name: 'Revival 1869',
    location: 'Clayton, NC',
    image: revivalImage,
    alt: 'Inside Revival 1869 in Clayton North Carolina',
    description:
      'A polished downtown Clayton cocktail lounge with historic character, warm lighting, craft cocktails, and a cozy place to gather after a ride.',
    mapQuery: 'Revival 1869 222 E Main St Clayton NC',
  },
  {
    name: "Vinson's Pub + Eatery",
    location: 'Clayton, NC',
    image: vinsonImage,
    alt: "Inside Vinson's Pub and Eatery in Clayton North Carolina",
    description:
      'A local Clayton pub and eatery with a relaxed neighborhood feel, approachable food, drinks, and an easygoing place to unwind before or after an adventure.',
    mapQuery: "Vinson's Pub + Eatery Clayton NC",
  },
]

const Partners = () => {
  return (
    <section className="partners--section">
      <div className="container">
        <div className="text-center partners--header">
          <p className="tours--subtitle">Local favorites</p>
          <div className="tours--title">
            <h3>Our <span>Partners</span></h3>
          </div>
          <p className="partners--intro">
            Make your Triangle Adventures day even better with a stop at two Clayton favorites we are proud to highlight.
          </p>
        </div>

        <div className="partners--grid">
          {partners.map((partner) => (
            <article className="partner--card" key={partner.name}>
              <div className="partner--image-wrap">
                <img src={partner.image} alt={partner.alt} loading="lazy" className="partner--image" />
              </div>

              <div className="partner--content">
                <span className="partner--location">{partner.location}</span>
                <h4>{partner.name}</h4>
                <p>{partner.description}</p>
              </div>

              <div className="partner--map-wrap">
                <iframe
                  title={`${partner.name} map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(partner.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
