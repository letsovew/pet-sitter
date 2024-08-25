import { prisma } from '../utils/prisma.util.js';

export class UserRepository {

    requestProposals = async(userId, partnerId, title, content) => {
        const data = await prisma.proposals.create({
            data: {
                userId,
                partnerId,
                title,
                content,
            },
        });
        return data;
    };
}