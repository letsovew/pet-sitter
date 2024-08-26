import express from "express";
import routes from "./routes.js";
import { joinValidator } from "../middlewares/validators/join.validator.js";
import { logInValidator } from "../middlewares/validators/login.validator.js";
import { AuthController} from "../controllers/auth.controller.js";
import { checkLoggedUser } from '../middlewares/locals.middleware.js';

const authRouter = express.Router();

authRouter.post(routes.join, AuthController.join);
authRouter.post(routes.logIn, logInValidator, AuthController.logIn);
authRouter.post(routes.register, checkLoggedUser, AuthController.register);

export { authRouter };