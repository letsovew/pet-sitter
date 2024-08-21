import { UserService } from '../services/users.service.js';

const userService = new UserService();

export class UserController {

    createProposal = async(req, res, next) => {
        const{
            body: { partnerId, title, content }
        } = req;
        const userId = req.query.id;
        try{
            const data = await userService.request(userId, partnerId, title, content);
            res.json({
                message: '����� ���� ��û���� �����߽��ϴ�.';
                data,
            });
        }catch(errpr){
            next(error);
        };
    };
}