import { AuthRepository } from '../repositories/auth.repository.js';

const authRepository = new AuthRepository();

export class AuthService {

    join = async (email, name, password) => {

        //const isExisted = await authRepository.readOneByEmail(email);
        try{
            //if(!isExisted) throw new Error('�̹� ���Ե� �̸����Դϴ�.');

            const data = await authRepository.create(email, name, password);

            return data;

        }catch(err){
            res.json(err);
        }

    };

    register = async (user) => {

        const isExisted = await authRepository.readOneByEmail(user.email);
        try{
            if(!isExisted) throw new Error('�̹� ��ϵ� ��Ʈ���Դϴ�.');
            const data = await authRepository.create(user);
            return data;
        }catch(error){
            res.json(error);
        };

        return { partner };
    };

};