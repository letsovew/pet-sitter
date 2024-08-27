import { prisma } from '../utils/prisma.util.js';

export class PostRepository{

    getAllPost = async() => {
        let posts = await prisma.posts.findMany({});

        return posts;
    };

    createPost = async (partnerId, title, content) => {
        const post = await prisma.posts.create({
            data: {
                partnerId,
                title,
                content,
            },
        });
        return post;
    };

    updatePost = async (authorId, postId, title, content) => {

        const newPost = await prisma.posts.update({
            where: {
                id: +postId,
                authorId
            },
            data: {
                ...(title && { title }),
                ...(content && { content }),
            },
        });
        return newPost;
    };
};