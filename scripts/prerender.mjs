import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { publicRoutes } from '../src/data/siteRoutes.js'

const rootDir = process.cwd()
const clientDir = join(rootDir, 'dist')
const serverDir = join(rootDir, 'dist-ssr')
const template = await readFile(join(clientDir, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(join(serverDir, 'entry-server.js')))

const routes = publicRoutes.map(({ path }) => path)

const renderDocument = (route) => {
  const { appHtml, headHtml } = render(route)

  return template
    .replace(
      /<!--app-seo-start-->[\s\S]*?<!--app-seo-end-->/,
      () => `<!--app-seo-start-->\n    ${headHtml}\n    <!--app-seo-end-->`,
    )
    .replace('<div id="root">', '<div id="root" data-prerendered="true">')
    .replace('<!--app-html-->', () => appHtml)
}

for (const route of routes) {
  const outputPath = route === '/'
    ? join(clientDir, 'index.html')
    : join(clientDir, `${route.slice(1)}.html`)

  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, renderDocument(route), 'utf8')
}

await writeFile(join(clientDir, '404.html'), renderDocument('/404'), 'utf8')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes.map(({ path, lastmod }) => `  <url>
    <loc>https://www.triangle-adventures.com${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>
`

await writeFile(join(clientDir, 'sitemap.xml'), sitemap, 'utf8')
await rm(serverDir, { recursive: true, force: true })

console.log(`Prerendered ${routes.length} public routes and 404.html`)
