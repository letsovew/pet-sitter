import express from "express";
import routes from "./routes";
import { register } from "../controllers/pets.controller.js";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";

const petRouter = express.Router();

petRouter.post(routes.petRegister, checkLoggedUser, register);

export default petRouter;