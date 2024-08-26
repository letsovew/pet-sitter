import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { UserService } from '../services/users.service.js';

const userService = new UserService();

export class UserController {

    requestProposals = async(req, res, next) => {
        const{
            body: { partnerId, title, content }
        } = req;
        const userId = req.query.id;
        try{
            const data = await userService.requestProposals(userId, partnerId, title, content);
            return res.status(HTTP_STATUS.OK).json({
                status: HTTP_STATUS.OK,
                message: MESSAGES.PROPOSALS.REQUEST.SUCCEED,
                data,
            });
        }catch(errpr){
            next(error);
        };
    };
}