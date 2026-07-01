const SITE_URL = 'https://www.triangle-adventures.com'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TravelAgency', 'SportsActivityLocation'],
  '@id': `${SITE_URL}/#business`,
  name: 'Triangle Adventures',
  alternateName: 'Triangle Adventures E-Bike Tours',
  url: `${SITE_URL}/`,
  image: DEFAULT_IMAGE,
  logo: `${SITE_URL}/websitelogo.png`,
  description: 'Triangle Adventures offers guided e-bike tours in Raleigh, Clayton, the Triangle area, and Wilmington, North Carolina with scenic routes, food stops, ghost stories, true crime, weird history, and local guides.',
  telephone: '+1-919-807-1368',
  email: 'Info@Triangle-Adventures.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '348 East Main Street',
    addressLocality: 'Clayton',
    addressRegion: 'NC',
    postalCode: '27520',
    addressCountry: 'US',
  },
  areaServed: [
    'Raleigh, NC',
    'Clayton, NC',
    'Durham, NC',
    'Cary, NC',
    'The Triangle, NC',
    'Wilmington, NC',
    'Wrightsville Beach, NC',
  ],
  knowsAbout: [
    'Raleigh e-bike tours',
    'Clayton e-bike tours',
    'Wilmington e-bike tours',
    'guided e-bike tours',
    'ghost tours',
    'true crime tours',
    'food tours',
    'North Carolina history tours',
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
  alternateName: 'Triangle Adventures E-Bike Tours',
  url: `${SITE_URL}/`,
  publisher: {
    '@id': `${SITE_URL}/#business`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/locations?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
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
  image = DEFAULT_IMAGE,
  category = 'Guided E-Bike Tour',
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${SITE_URL}${path}#tour`,
  name,
  description,
  image,
  category,
  brand: {
    '@type': 'Brand',
    name: 'Triangle Adventures',
  },
  provider: {
    '@id': `${SITE_URL}/#business`,
  },
  offers: {
    '@type': 'Offer',
    price,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}${path}`,
    seller: {
      '@id': `${SITE_URL}/#business`,
    },
  },
  areaServed,
  mainEntityOfPage: `${SITE_URL}${path}`,
})

export const tourServiceSchema = ({
  name,
  description,
  path,
  areaServed,
  serviceType = 'Guided E-Bike Tour',
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}${path}#service`,
  name,
  description,
  serviceType,
  areaServed,
  provider: {
    '@id': `${SITE_URL}/#business`,
  },
  url: `${SITE_URL}${path}`,
})

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})