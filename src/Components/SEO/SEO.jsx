import { Helmet } from 'react-helmet'

const SITE_URL = 'https://www.triangle-adventures.com'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

const normalizePath = (path = '/') => {
  if (!path || path === '/') return '/'
  return path.startsWith('/') ? path : `/${path}`
}

const getCanonical = (path) => `${SITE_URL}${normalizePath(path)}`

const SEO = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
}) => {
  const canonical = getCanonical(path)

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content="Triangle Adventures" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
