import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { AuthService } from '../services/auth.service.js';

const authService = new AuthService();

export class AuthController {
    //authService = new this.AuthService();

    join = async (req, res, next) => {
        const{
            body : {email, name, password}
        } = req;
        try{
            const data = await authService.join(email, name, password);
            return res.status(HTTP_STATUS.CREATED).json({
                status: HTTP_STATUS.CREATED,
                message: MESSAGES.AUTH.JOIN.SUCCEED,
                data,
            });
        }catch(error){
            next(error);
        };
    };

    logIn = async (req, res, next) => {
        const { user } = req.user;
        try{
            const data = await authService.logIn(user);
            req.logged.user = data;
            res.status(HTTP_STATUS.OK).json({
                status: HTTP_STATUS.OK,
                message: MESSAGES.AUTH.LOGIN.SUCCEED,
                data,
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
