import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Helmet } from 'react-helmet'
import App from './App'

export const render = (url) => {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
  const helmet = Helmet.renderStatic()

  return {
    appHtml,
    headHtml: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].join('\n    '),
  }
}
