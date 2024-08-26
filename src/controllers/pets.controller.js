import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { PetsService } from '../services/pets.service.js';

const petsService = new PetService();

export class PetController {
    
    register = async (req, res, next) => {
        const {
            body: { name, type, age, gender}
        } = req;
        const userId = req.logged.user.id;
        try{
            const data = await petsService.register(userId, name, type, age, gender);
            return res.status(HTTP_STATUS.OK).json({
                status: HTTP_STATUS.OK,
                message: MESSAGES.PETS.REGISTER.SUCCEED,
                data,
            });;
        }catch(error){
            next(error);
        };
    }
}