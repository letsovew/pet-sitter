import { PetsRepository } from '../repositories/pets.repository.js';

const petsRepository = new PetsRepository();

export class PetsService {

    register = async (userId, name, type, age, gender) => {
        try{
            const data = await petsRepository.register(userId, name, type, age, gender);
            return data;
        }catch(error){
            res.json(error);
        };

        return data;
    };
}