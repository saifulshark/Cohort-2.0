import { Hono } from "hono";
import { getTags, getPostByTagName } from '../controller/tagController';

export const tagRouter = new Hono()

tagRouter.get('/getPost/:tag', getPostByTagName);
tagRouter.get('/tags', getTags)