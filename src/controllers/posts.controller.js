import { MESSAGES } from '../constants/message.constant.js';
import { PostService } from '../services/post.service.js';

const postService = new PostService();

export class PostController {

    getAllPost = async(req, res, next) => {

        try{
            const posts = await postService.getAllPost();
            res.json({ data: posts });
            next();
        }catch(error){
            next(error);
        };
    };

    createPost = async(req, res, next) => {
        const author = req.logged.partner;
        const{
            body: { title, content }
        } = req;
        try{
            if (!title || !content) throw new Error('InvalidParamsError');

            const post = await postService.createPost(author.id, author.email, title, content);

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
        const author = req.logged.partner;
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
            const newPost = await postService.updatePost(author.id, postId, title, content);
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