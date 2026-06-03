const SITE_URL = 'https://www.triangle-adventures.com'

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TravelAgency'],
  '@id': `${SITE_URL}/#business`,
  name: 'Triangle Adventures',
  url: `${SITE_URL}/`,
  telephone: '+1-919-807-1368',
  email: 'Info@Triangle-Adventures.com',
  priceRange: '$$',
  areaServed: [
    'Raleigh, NC',
    'Durham, NC',
    'Cary, NC',
    'Clayton, NC',
    'The Triangle, NC',
  ],
  sameAs: [
    'https://www.facebook.com/RTPadventures',
    'https://www.instagram.com/triangleadventures',
    'https://www.tripadvisor.com/Attraction_Review-g49463-d27435815-Reviews-Triangle_Adventures-Raleigh_North_Carolina.html',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Triangle Adventures',
  url: `${SITE_URL}/`,
  publisher: {
    '@id': `${SITE_URL}/#business`,
  },
}

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
})

export const tourProductSchema = ({
  name,
  description,
  price,
  path,
  areaServed,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  brand: {
    '@type': 'Brand',
    name: 'Triangle Adventures',
  },
  offers: {
    '@type': 'Offer',
    price,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}${path}`,
  },
  areaServed,
})
