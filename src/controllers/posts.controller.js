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
            if(!title || !content) throw new Error('모든 항목을 기입해 주십시오.');

            const post = await postService.createPost(author.id, author.email, title, content);

            return res.json({
                message: '게시물이 등록되었습니다.',
                data: post,
            });
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
            const newPost = await postService.updatePost(author.id, postId, title, content);
            return res.json({
                message: '게시물 수정이 완료되었습니다.',
                data: newPost,
            });
        }catch(error){
            next(error);
        };
    };
};