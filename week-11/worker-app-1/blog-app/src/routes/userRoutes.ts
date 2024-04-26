import { Hono } from "hono";
import { signup, signin, getAllUsers } from '../controller/userController';
import { authMiddlware } from "../middleware/user";

export const userRouter = new Hono();

userRouter.post('/signup', signup);
userRouter.post('singin', signin);

userRouter.get('/users', authMiddlware, getAllUsers);