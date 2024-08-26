import express from "express";
import routes from "./routes.js";
import { createPostValidator } from "../middlewares/validators/create.validator.js";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";
import { updatePostValidator } from "../middlewares/validators/update.validator.js";
import { PostController } from "../controllers/posts.controller.js";

const postRouter = express.Router();

postRouter.get(routes.posts, checkLoggedUser, PostController.getAllPost);
postRouter.post(routes.createPost, checkLoggedUser, createPostValidator, PostController.createPost);
postRouter.post(routes.updatePost, checkLoggedUser, updatePostValidator, PostController.updatePost);

export { postRouter };