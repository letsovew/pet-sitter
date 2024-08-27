import { PostRepository } from '../repositories/posts.repository.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';

const postRepository = new PostRepository();

export class PostService {

    getAllPost = async(user) => {
        if(!user) return json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: MESSAGES.AUTH.COMMON.SESSION.NO_SESSION,
        });
        try{
            const posts = await postsRepository.findMany({});
            if(!posts) return json({
                status: HTTP_STATUS.NOT_FOUND,
                message: MESSAGES.POSTS.COMMON.NOT_FOUND,
            });
            return posts;
        }catch(error){
            return json(error);
        };
    };

    createPost = async (partnerId, title, content) => {
        if(!partnerId) return json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: MESSAGES.AUTH.COMMON.SESSION.EXPIRED,
        });
        if(!title) return json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: MESSAGES.POSTS.COMMON.TITLE,
        });
        if(!content) return json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: MESSAGES.POSTS.COMMON.CONTENT,
        });
        const post = await postRepository.createPost(partnerId, title, content);
        if(!post) return json({
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
            message: MESSAGES.SERVER.ERROR,
        });
        return post;
    };

    updatePost = async (authorId, postId, title, content) => {
        if (!postId || !authorId) {
            return json({
                status: HTTP_STATUS.NOT_FOUND,
                message: MESSAGES.POSTS.COMMON.NOT_FOUND,
            });
        };
        if(!title && !content) return json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: MESSAGES.REQUIRED,
        });
        const newPost = await postRepository.updatePost(authorId, postId, title, content);
        if(!newPost) return json({
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
            message: MESSAGES.SERVER.ERROR,
        });
        return newPost;
    };
};