import { prisma } from '../utils/prisma.util.js';

export class AuthRepository {

    isExisted = async (email) => {
        const user = await prisma.users.findUnique({ where: { email } });
        return user;
    };

    readOneByEmail = async (email) => {
        const data = await prisma.users.findUnique({ where: { email }});
        return data;
    };

    join = async (email, nickname, password) => {
        const data = await prisma.users.create({
            data: {
                email,
                nickname,
                password,
            },
        });
        return data;
    };

    register = async ({user}) => {
        const partner = await prisma.partners.create({
            data: {
                email: user.email,
                nickname: user.nickname,
            },
        });
        return partner;
    };
};