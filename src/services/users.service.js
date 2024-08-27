import { UserRepository } from '../repositories/users.repository.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';

const userRepository = new UserRepository();

export class UserService {

    requestProposals = async (userId, partnerId, title, content) => {
        if(!partnerId || !userId) return json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: MESSAGES.REQUIRED,
        });
        if(!title || !content) return json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: MESSAGES.REQUIRED,
        });
        try{
            const data = await userRepository.requestProposals(userId, partnerId, title, content);
            if(!data) return json({
                status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
                message: MESSAGES.SERVER.ERROR,
            });
            return data;
        }catch(err){
            return json(error);
        };
    };
}