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
        try{
            const schedule = await partnerRepository.createSchedule(partnerId, userId, description, date);
            if(!schedule) return json({
                status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
                message: MESSAGES.SERVER.ERROR,
            });
            return schedule;
        }catch(err){
            return json(err);
        };
    };
};