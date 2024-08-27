import { PartnerRepository } from '../repositories/partners.repository.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';

const partnerRepository = new PartnerRepository();

export class PartnerService {

    createSchedule = async (partnerId, userId, description, date) => {
        if(!partnerId || !userId || !description || !date) return json({
            status:HTTP_STATUS.BAD_REQUEST,
            message: MESSAGES.SCHEDULES.REQUIRED,
        });
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