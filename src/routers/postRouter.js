import express from "express";
import routes from "./routes.js";
import { createPostValidator } from "../middlewares/validators/create.validator.js";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";
import { updatePostValidator } from "../middlewares/validators/update.validator.js";
import {
    getAllPost,
    createPost,
    updatePost,
} from "../controllers/posts.controller.js";
import { updateResumeValidator } from "../middlewares/validators/update.validator.js";

const postRouter = express.Router();

postRouter.get(routes.posts, checkLoggedUser, getAllPost);
postRouter.post(routes.createPost, checkLoggedUser, createPostValidator, createPost);
postRouter.post(routes.updatePost, checkLoggedUser, updatePostValidator, updatePost);

export default {postRouter};