import express from "express";
import routes from "./routes";
import {
    createSchedule,
} from "../controllers/partners.controller.js";
import { checkLoggedUser } from "../middlewares/locals.middleware";

const partnerRouter = express.Router();

partnerRouter.post(routes.createPost, checkLoggedUser, createSchedule);

export default partnerRouter;