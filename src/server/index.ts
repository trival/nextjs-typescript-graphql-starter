// @ts-ignore
// import * as preactAlias from '@zeit/next-preact/alias'
import { createServer } from 'http'
import * as next from 'next'
import { parse } from 'url'

// preactAlias()

const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url as string, true)
		// const { pathname, query } = parsedUrl
		// if (pathname === '/a') {
		// 	app.render(req, res, '/a', query)
		// } else if (pathname === '/b') {
		// 	app.render(req, res, '/b', query)
		// } else {
		handle(req, res, parsedUrl)
		// }
	}).listen(port, (err?: Error) => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})
