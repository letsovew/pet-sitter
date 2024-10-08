import { prisma } from '../utils/prisma.util.js';

export class PetRepository {

    register = async (userId, name, type, age, gender) => {
        const pet = await prisma.partners.create({
            data: {
                userId: +userId,
                name,
                type,
                age,
                gender,
            },
        });
        return pet;
    };
}