import express from "express";
import routes from "./routes";
import {
    createProposal,
} from "../controllers/users.controller.js";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";

const userRouter = express.Router();

userRouter.post(routes.createProposal, checkLoggedUser, createProposal);

export default {userRouter};