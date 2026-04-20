import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { postRouter } from './modules/posts/router.js'

const app = new Hono()
  .route("/posts", postRouter)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
