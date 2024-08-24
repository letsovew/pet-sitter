import { PetsService } from '../services/pets.service.js';

const petsService = new PetService();

export class PetsController {
    
    register = async (req, res, next) => {
        const {
            body: { name, type, age, gender}
        } = req;
        const userId = req.logged.user.id;
        try{
            const data = await petsService.register(userId, name, type, age, gender);
            return res.json({
                message: "�ݷ����� ��� �Ϸ�",
                data,
            });
        }catch(error){
            next(error);
        };
    }
}