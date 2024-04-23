import { Hono } from "hono";

const blogRoutes = new Hono()

blogRoutes.get('/', (c)=>{
    return c.text("This is from blog Routes")
})

export default blogRoutes