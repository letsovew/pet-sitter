import express from "express";
import routes from "./routes.js";
import { joinValidator } from "../middlewares/validators/join.validator.js";
import { loginValidator } from "../middlewares/validators/login.validator.js";
import { AuthController} from "../controllers/auth.controller.js";
import { checkLoggedUser } from '../middlewares/locals.middleware.js';

const authRouter = express.Router();

const authController = new AuthController();

authRouter.post(routes.join, joinValidator, authController.join);
authRouter.post(routes.login, loginValidator, authController.login);
authRouter.post(routes.register, checkLoggedUser, authController.register);

export { authRouter };