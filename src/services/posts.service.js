import { PostRepository } from '../repositories/posts.repository.js';

const postRepository = new PostRepository();

export class PostService {

    getAllPost = async(user) => {
        try{
            if(!user) return res.json('ȸ���� ���� �����մϴ�.');

            const posts = await postsRepository.findMany({});

            return { posts }
        }catch(error){
            return res.json(error);
        };
    };

    createPost = async (partnerId, email, title, content) => {
        const post = await postRepository.createPost(partnerId, email, title, content);
        if(!post) return res.json('�Խù� ��Ͽ� �����߽��ϴ�.');
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
        if(!postId) return res.json('�������� �ʴ� �Խù��Դϴ�.');
        if(!title && !content) return res.json('������ ������ ������ �ֽʽÿ�.');
        const newPost = await postRepository.updatePost(authorId, postId, title, content);
        if(!newPost) return res.json('�Խù� ������ �����߽��ϴ�.');
        return { newPost };
    };
}