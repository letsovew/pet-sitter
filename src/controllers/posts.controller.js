import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { PostService } from '../services/posts.service.js';

const postService = new PostService();

export class PostController {

    getAllPost = async(req, res, next) => {

        try{
            const posts = await postService.getAllPost();

            return posts.map( post => {
                res.json({
                    "id": post.id,
                    "partnerId": post.partnerId,
                    "title": post.title,
                    "createdAt": post.createdAt,
                });
            });
            res.json({ data: posts });
            next();
        }catch(error){
            next(error);
        };
    };

    createPost = async(req, res, next) => {
        const partner = req.logged.partner;
        const{
            body: { title, content }
        } = req;
        try{
            if (!title || !content) return res.json('InvalidParamsError');

            const post = await postService.createPost(partner.id, partner.email, title, content);

            return res.status(HTTP_STATUS.OK).json({
                message: MESSAGES.POSTS.CREATED.SUCCEED,
                data: post,
            });
            next();
        }catch(error){
            next(error);
        };
    };

    updatePost = async(req, res, next) => {
        const partner = req.logged.partner;
        const{
            body: { title, content}
        } = req;
        const postId = req.query.id;

        try{
            if (!post) {
                return res.status(HTTP_STATUS.NOT_FOUND).json({
                    status: HTTP_STATUS.NOT_FOUND,
                    message: MESSAGES.POSTS.COMMON.NOT_FOUND,
                });
            }
            const newPost = await postService.updatePost(partner.id, postId, title, content);
            return res.status(HTTP_STATUS.OK).json({
                status: HTTP_STATUS.OK,
                message: MESSAGES.POSTS.UPDATE.SUCCEED,
                data: newPost,
            });
        }catch(error){
            next(error);
        };
    };
};