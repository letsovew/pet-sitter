import express from "express";
import routes from "./routes";
import { checkLoggedUser } from "../middlewares/locals.middleware.js";
import {
    getAllPost,
    createPost,
    updatePost,
} from "../controllers/posts.controller.js";

const postRouter = express.Router();

postRouter.get(routes.posts, checkLoggedUser, getAllPost);
postRouter.post(routes.createPost, checkLoggedUser, createPost);
postRouter.post(routes.updatePost, checkLoggedUser, updatePost);

export default postRouter;