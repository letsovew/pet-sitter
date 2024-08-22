import express from "express";
import routes from "./routes";
import {
    join,
    logIn,
    register,
} from "../controllers/auth.controller.js";
import {
    checkLoggedUser,
} from '../middlewares/locals.middleware.js';

const authRouter = express.Router();

userRouter.post(routes.join, join);
userRouter.post(routes.logIn, logIn);
userRouter.post(routes.register, checkLoggedUser, register);

export default authRouter;