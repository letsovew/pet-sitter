import express from "express";
import routes from "./routes";
import { joinValidator } from "../middlewares/validators/join.validator";
import { logInValidator } from "../middlewares/validators/login.validator";
import {
    join,
    logIn,
    register,
} from "../controllers/auth.controller.js";
import {
    checkLoggedUser,
} from '../middlewares/locals.middleware.js';

const authRouter = express.Router();

authRouter.post(routes.join, joinValidator, join);
authRouter.post(routes.logIn, logInValidator, logIn);
authRouter.post(routes.register, checkLoggedUser, register);

export default { authRouter };