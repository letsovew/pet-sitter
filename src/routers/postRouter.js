import express from "express";
import routes from "./routes.js";
import { createPostValidator } from "../middlewares/validators/create.validator.js";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";
import { updatePostValidator } from "../middlewares/validators/update.validator.js";
import { PostController } from "../controllers/posts.controller.js";

const postRouter = express.Router();

const postController = new PostController();

postRouter.get(routes.posts, checkLoggedUser, postController.getAllPost);
postRouter.post(routes.createPost, checkLoggedUser, createPostValidator, postController.createPost);
postRouter.post(routes.updatePost, checkLoggedUser, updatePostValidator, postController.updatePost);

export { postRouter };