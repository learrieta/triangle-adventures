import { useEffect } from 'react'
import './socialembeds.css'

const InstagramEmbed = ({ title = 'See the adventure', url }) => {
  useEffect(() => {
    if (!url) return

    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
    if (existingScript && window.instgrm) {
      window.instgrm.Embeds.process()
      return
    }

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [url])

  if (!url) return null

  return (
    <section className="instagram-section" aria-labelledby="instagram-embed-title">
      <div className="container">
        <p className="tours--subtitle">See the adventure</p>
        <div className="tours--title">
          <h2 id="instagram-embed-title">{title}</h2>
        </div>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
        />
      </div>
    </section>
  )
}

export default InstagramEmbed
