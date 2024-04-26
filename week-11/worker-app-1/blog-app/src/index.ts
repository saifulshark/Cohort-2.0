import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { userRouter } from './routes/userRoutes';
import { postRouter } from './routes/postRoutes';
import { tagRouter } from './routes/tagRoutes';

const app = new Hono();
app.use(cors());

app.route('/api/v1/user', userRouter);
app.route('/api/v1/posts', postRouter);
app.route('/api/v1/tag', tagRouter);

app.get('/', (c) => {
    return c.text('Hello from hono')
})
export default app
