import { PetRepository } from '../repositories/pets.repository.js';

const petRepository = new PetRepository();

export class PetService {

    register = async (userId, name, type, age, gender) => {
        try{
            const data = await petRepository.register(userId, name, type, age, gender);
            return data;
        }catch(error){
            res.json(error);
        };
    };
}