import { AuthRepository } from '../repositories/auth.repository.js';
import { MESSAGES } from '../constants/message.constant.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { errorHandler } from '../middlewares/error-handler.js';

const authRepository = new AuthRepository();

export class AuthService {

    isExisted = async ( email ) => {
        const user = await authRepository.isExisted(email);
        return user;
    };

    join = async (email, nickname, password) => {
        if(!email || !nickname || !password) return json({
            status: HTTP_STATUS.NOT_FOUND,
            message: MESSAGES.AUTH.COMMON.UNAUTHORIZED,
        });
        const isExisted = await authRepository.readOneByEmail(email);
        if(isExisted) return json({
            status: HTTP_STATUS.CONFLICT,
            message: MESSAGES.AUTH.COMMON.EMAIL.DUPLICATED,
        });
        try{
            const data = await authRepository.join(email, nickname, password);
            if(!data) return json({
                status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
                message: MESSAGES.SERVER.ERROR,
            });
            return data;
        }catch(err){
            return json(err);
        };
    };

    register = async (user) => {
        if(!user) return json({
            status: HTTP_STATUS.UNAUTHORIZED,
            message: MESSAGES.AUTH.COMMON.SESSION.EXPIRED,
        });
        const isExisted = await authRepository.readOneByEmail(user.email);
        if(isExisted) return json({
            status: HTTP_STATUS.CONFLICT,
            message: MESSAGES.AUTH.COMMON.EMAIL.DUPLICATED,
        });
        try{
            const partner  = await authRepository.register(user);
            if(!partner) return json({
                status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
                message: MESSAGES.SERVER.ERROR,
            });
            return partner;
        }catch(error){
            return json(error);
        };
    };
};