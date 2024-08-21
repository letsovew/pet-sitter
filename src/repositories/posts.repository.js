import { prisma } from '../utils/prisma.util.js';

export class PostRepository{

    getAllPost = async() => {
        let data = await prisma.posts.findMany({
            orderBy: {
                createdAt: sort,
            },
        });

        return data;
    };

    createPost = async (authorId, email, title, content) => {
        const post = await prisma.posts.create({
            data: {
                authorId,
                title,
                content,
            };
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