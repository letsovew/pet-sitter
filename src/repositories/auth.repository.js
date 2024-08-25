import { prisma } from '../utils/prisma.util.js';

export class AuthRepository {

    // existedUser = async (email) => {
    //     const user = await prisma.users.findUnique({ where: { email } });

    //     return user;
    // };

    join = async (email, password, name) => {
        const data = await prisma.user.create({
            data: {
                email,
                password,
                name,
            },
        });
        return data;
    };

    register = async ({user}) => {
        const partner = await prisma.partners.create({
            data: {
                email: user.email,
                nickname,
            },
        });
        return partner;
    };
};