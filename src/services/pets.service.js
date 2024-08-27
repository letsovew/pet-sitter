import { PetRepository } from '../repositories/pets.repository.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';

const petRepository = new PetRepository();

export class PetService {

    register = async (userId, name, type, age, gender) => {
        if(!userId || !name || !type || !age || !gender) return json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: MESSAGES.REQUIRED,
        });
        try{
            const data = await petRepository.register(userId, name, type, age, gender);
            if(!data) return json({
                status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
                message: MESSAGES.SERVER.ERROR,
            });
            return data;
        }catch(error){
            res.json(error);
        };
    };
}