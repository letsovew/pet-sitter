import { PostRepository } from '../repositories/posts.repository.js';

const postRepository = new PostRepository();

export class PostService {

    getAllPost = async(author) => {
        try{
            if(!author) throw new Error('회원만 접근 가능합니다.');

            const posts = await postsRepository.getAllPost(author.Id);

            return posts.map( post => {
                    id: +post.id,
                    authorId: +post.authorId,
                    title: post.title,
                    content: post.content,
                    createdAt: post.createdAt,
                    updatedAt: post.updatedAt,
            });
        }catch(error){
            return res.json(error);
        };
    };

    createPost = async (authorId, email, title, content) => {
        const post = await postRepository.createPost(authorId, email, title, content);
        if(!post) return '게시물 등록에 실패했습니다.';
        return{
            id: +post.id,
            authorId: +post.authorId,
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
        if(!newPost) return '게시물 수정에 실패했습니다.';
        return { newPost };
    };
}