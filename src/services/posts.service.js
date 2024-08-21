import { PostRepository } from '../repositories/posts.repository.js';

const postRepository = new PostRepository();

export class PostService {

    getAllPost = async(author) => {
        try{
            if(!author) throw new Error('회원만 접근 가능합니다.');

            const posts = await postsRepository.getAllPost(author.Id);

            return posts.map( post => {
                return{
                    id: +post.id,
                    authorId: +post.authorId,
                    title: post.title,
                    content: post.content,
                    createAt: post.createdAt,
                    updateAt: post.updatedAt,
                },
            });
        }catch(error){
            return res.json(error);
        };
    };

    createPost = async (authorId, email, title, content) => {
        const post = await postRepository.createPost(authorId, email, title, content);
    };
}