import { prisma } from '../utils/prisma.util.js';

export class PartnerRepository {
    createSchedule = async (partnerId, userId, description, date) => {
        const schedule = await prisma.schedules.create({
            data: {
                userId,
                partnerId,
                description,
                date,
            },
        });
        return schedule;
    };
}