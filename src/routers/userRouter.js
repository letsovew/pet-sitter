import express from "express";
import routes from "./routes.js";
import { UserController } from "../controllers/users.controller.js";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";

const userRouter = express.Router();

userRouter.post(routes.requestProposals, checkLoggedUser, UserController.requestProposals);

export { userRouter };