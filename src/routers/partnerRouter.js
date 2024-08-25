import express from "express";
import routes from "./routes.js";
import { createSchedule } from '../controllers/partners.controller.js';
import { checkLoggedUser } from "../middlewares/locals.middleware.js";

const partnerRouter = express.Router();

partnerRouter.post(routes.createSchedule, checkLoggedUser, createSchedule);

export default partnerRouter;