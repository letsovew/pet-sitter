import express from "express";
import routes from "./routes.js";
import { PetController } from "../controllers/pets.controller.js";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";

const petRouter = express.Router();

const petController = new PetController();

petRouter.post(routes.petRegister, checkLoggedUser, petController.register);

export { petRouter };