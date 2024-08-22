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
            res.json({
                message: '�������� ��ϵƽ��ϴ�.';
                data: schedule,
            });
        }catch(error){
            next(error);
        };
    }

    getAllProposal = async(req, res, next) => {

    };
}