import express from "express";
import routes from "./routes.js";
import { UserController } from "../controllers/users.controller.js";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";

const userRouter = express.Router();
const userController = new UserController();

userRouter.post(routes.requestProposals, checkLoggedUser, userController.requestProposals);

export { userRouter };