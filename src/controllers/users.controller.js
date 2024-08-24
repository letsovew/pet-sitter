import { UserService } from '../services/users.service.js';

const userService = new UserService();

export class UserController {

    requestProposal = async(req, res, next) => {
        const{
            body: { partnerId, title, content }
        } = req;
        const userId = req.query.id;
        try{
            const data = await userService.requestProposal(userId, partnerId, title, content);
            res.json({
                message: '펫시터 서비스 요청서를 전달했습니다.';
                data,
            });
        }catch(errpr){
            next(error);
        };
    };
}