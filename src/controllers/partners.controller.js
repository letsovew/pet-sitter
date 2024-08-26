import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { PartnerService } from '../services/partners.service.js';

const partnerService = new PartnerService();

export class PartnerController {

    createSchedule = async(req, res, next) => {
        const partnerId = req.query.id;
        const {
            body: { userId, description, date }
        } = req;

        try{
            const schedule = await partnerService.createSchedule(partnerId, userId, description, date);
            return res.status(HTTP_STATUS.CREATED).json({
                status: HTTP_STATUS.CREATED,
                message: MESSAGES.SCHEDULES.CREATED.SUCCEED,
                data: { schedule },
            });
        }catch(error){
            next(error);
        };
    }

    getAllProposal = async(req, res, next) => {

    };
}