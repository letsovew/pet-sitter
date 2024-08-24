import { PartnerRepository } from '../repositories/partners.repository.js';

const partnerRepository = new PartnerRepository();

export class PartnerService {

    createSchedule = async (partnerId, userId, description, date) => {
        if(!partnerId || !userId || !description || !date) return res.json('스케쥴을 다시 작성해주십시오');
        const schedule = await partnerRepository.createSchedule(partnerId, userId, description, date);
        return {
            id: +schedule.id,
            userId: +schedule.userId,
            partnerId: +schedule.partnerId,
            description: schedule.description,
            date: schedule.date,
            createdAt: schedule.createdAt,
        };
    };
};