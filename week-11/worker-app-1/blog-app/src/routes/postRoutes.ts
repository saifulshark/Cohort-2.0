import { Hono } from "hono";
import {
    getAllPost,
    createPost,
    getPost,
    getUserPosts,
    updatePost,
    deletePost
} from '../controller/postContoller'
import { authMiddlware } from "../middleware/user";

export const postRouter = new Hono();

postRouter.get('/all-posts', getAllPost);
postRouter.post('/create-post', authMiddlware, createPost);
postRouter.get('/posts',authMiddlware, getPost);
postRouter.get('/post/:id', authMiddlware, getUserPosts);
postRouter.put('/post/:id', authMiddlware, updatePost);
postRouter.delete('/post/:id', authMiddlware, deletePost);