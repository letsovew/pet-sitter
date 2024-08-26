import { PostRepository } from '../repositories/posts.repository.js';

const postRepository = new PostRepository();

export class PostService {

    getAllPost = async(user) => {
        try{
            if(!user) return res.json('회원만 접근 가능합니다.');

            const posts = await postsRepository.findMany({});

            return { posts }
        }catch(error){
            return res.json(error);
        };
    };

    createPost = async (partnerId, email, title, content) => {
        const post = await postRepository.createPost(partnerId, email, title, content);
        if(!post) return res.json('게시물 등록에 실패했습니다.');
        return{
            id: +post.id,
            partnerId: +post.partnerId,
            title: post.title,
            content: post.content,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
        };
    };

    updatePost = async (authorId, postId, title, content) => {
        if(!postId) return res.json('존재하지 않는 게시물입니다.');
        if(!title && !content) return res.json('변경할 내용을 기입해 주십시오.');
        const newPost = await postRepository.updatePost(authorId, postId, title, content);
        if(!newPost) return res.json('게시물 수정에 실패했습니다.');
        return { newPost };
    };
}