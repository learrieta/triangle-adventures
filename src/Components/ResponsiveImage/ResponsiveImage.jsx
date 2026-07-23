const imageVariants = import.meta.glob(
  '/src/assets/**/*-optimized-{800,1600}.webp',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
)

const getVariant = (asset, width) => (
  imageVariants[`/src/assets/${asset}-optimized-${width}.webp`]
)

const ResponsiveImage = ({
  asset,
  alt,
  width,
  height,
  sizes = '(max-width: 767px) 100vw, 50vw',
  loading = 'lazy',
  ...props
}) => {
  const small = getVariant(asset, 800)
  const large = getVariant(asset, 1600)

  if (!small || !large) {
    throw new Error(`Missing responsive image variants for ${asset}`)
  }

  return (
    <img
      src={large}
      srcSet={`${small} 800w, ${large} 1600w`}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={loading}
      decoding="async"
      {...props}
    />
  )
}

export default ResponsiveImage
