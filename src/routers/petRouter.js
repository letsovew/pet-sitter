import express from "express";
import routes from "./routes.js";
import { PetController } from "../controllers/pets.controller.js";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";

const petRouter = express.Router();

petRouter.post(routes.petRegister, checkLoggedUser, PetsController.register);

export { petRouter };