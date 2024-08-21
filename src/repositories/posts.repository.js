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
    }
};