import { PostRepository } from '../repositories/posts.repository.js';

const postRepository = new PostRepository();

export class PostService {

    getAllPost = async(author) => {
        try{
            if(!author) throw new Error('ȸ���� ���� �����մϴ�.');

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
        if(!post) return '�Խù� ��Ͽ� �����߽��ϴ�.';
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
        if(!postId) return res.json('�������� �ʴ� �Խù��Դϴ�.');
        if(!title && !content) return res.json('������ ������ ������ �ֽʽÿ�.');
        const newPost = await postRepository.updatePost(authorId, postId, title, content);
        if(!newPost) return '�Խù� ������ �����߽��ϴ�.';
        return { newPost };
    };
}