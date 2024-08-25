import { AuthRepository } from '../repositories/auth.repository.js';

const authRepository = new AuthRepository();

export class AuthService {

    join = async (email, name, password) => {

        //const isExisted = await authRepository.readOneByEmail(email);
        try{
            //if(!isExisted) throw new Error('이미 가입된 이메일입니다.');

            const data = await authRepository.create(email, name, password);

            return data;

        }catch(err){
            res.json(err);
        }

    };

    register = async (user) => {

        const isExisted = await authRepository.readOneByEmail(user.email);
        try{
            if(!isExisted) throw new Error('이미 등록된 파트너입니다.');
            const data = await authRepository.create(user);
            return data;
        }catch(error){
            res.json(error);
        };

        return { partner };
    };

};