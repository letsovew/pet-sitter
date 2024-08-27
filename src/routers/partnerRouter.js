import express from "express";
import routes from "./routes.js";
import { PartnerController } from '../controllers/partners.controller.js';
import { checkLoggedUser } from "../middlewares/locals.middleware.js";

const partnerRouter = express.Router();

const partnerController = new PartnerController();

partnerRouter.post(routes.createSchedule, checkLoggedUser, partnerController.createSchedule);

export { partnerRouter };