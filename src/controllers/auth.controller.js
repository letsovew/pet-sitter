import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { AuthService } from '../services/auth.service.js';

const authService = new AuthService();

export class AuthController {

    join = async (req, res, next) => {
        const{
            body : {email, nickname, password}
        } = req;
        try{
            if(!email || !nickname || !password) return res.status(HTTP_STATUS.NOT_FOUND).json({
                status: HTTP_STATUS.NOT_FOUND,
                message: MESSAGES.AUTH.COMMON.UNAUTHORIZED,
            });
            const data = await authService.join(email, nickname, password);
            if(!data) return res.status(HTTP_STATUS.NOT_FOUND).json({
                status: HTTP_STATUS.NOT_FOUND,
                message: MESSAGES.AUTH.COMMON.SESSION.INVALID,
            });
            return res.status(HTTP_STATUS.CREATED).json({
                status: HTTP_STATUS.CREATED,
                message: MESSAGES.AUTH.JOIN.SUCCEED,
                data,
            });
        }catch(error){
            next(error);
        };
    };

    login = async (req, res, next) => {
        const { user } = req.user;
        try{
            const data = await authService.logIn(user);
            req.logged.user = data;
            res.status(HTTP_STATUS.OK).json({
                status: HTTP_STATUS.OK,
                message: MESSAGES.AUTH.LOGIN.SUCCEED,
            });
            next();
        }catch(error){
            next(error);
        };
    };

    register = async (req, res, next) => {
        const user = req.logged.user;
        try{
            const data = await authService.register(user);
            return res.status(HTTP_STATUS.CREATED).json({
                status: HTTP_STATUS.CREATED,
                message: MESSAGES.AUTH.REGISTER.SUCCEED,
                data,
            });
        }catch(error){
            next(error);
        };
    };
};
