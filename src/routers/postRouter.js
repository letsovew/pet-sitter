import express from "express";
import routes from "./routes";
import { createPostValidator } from "../middlewares/validators/create.validator";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";
import { updatePostValidator } from "../middlewares/validators/update.validator";
import {
    getAllPost,
    createPost,
    updatePost,
} from "../controllers/posts.controller.js";
import { updateResumeValidator } from "../middlewares/validators/update.validator";

const postRouter = express.Router();

postRouter.get(routes.posts, checkLoggedUser, getAllPost);
postRouter.post(routes.createPost, checkLoggedUser, createPostValidator, createPost);
postRouter.post(routes.updatePost, checkLoggedUser, updatePostValidator, updatePost);

export default {postRouter};