import { Hono } from 'hono'
import userRoutes from './routes/user'
import blogRoutes from './routes/blog'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string ,
		datasourceUrl: string,
		JWT_TOKEN_KEY: string
	}
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/users', userRoutes)
app.route('/blogs', blogRoutes)


export default app
