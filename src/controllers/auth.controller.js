import { AuthService } from '../services/auth.service.js';

const authService = new AuthService();

export class AuthController {

    join = async (req, res, next) => {
        const{
            body : {email, name, password}
        } = req;
        try{
            const data = await authService.join(email, name, password);
            return res.json(data);
        }catch(error){
            next(error);
        }
    };

    logIn = async (req, res, next) => {
        const { user } = req.user;
        try{
            const data = await authService.logIn(user);
            req.logged.user = data;
            return res.json({
                message: "로그인 완료",
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
            req.logged.partner = data;
            return res.json({
                message: "파트너 등록 완료",
                data,
            });
        }catch(error){
            next(error);
        };
    }
};
