import { AuthRepository } from '../repositories/auth.repository.js';
import { MESSAGES } from '../constants/message.constant.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';

const authRepository = new AuthRepository();

export class AuthService {

    // isExisted = async ( email ) => {
    //     const user = await authRepository.isExisted(email);
    //     return user;
    // };

    join = async (email, nickname, password) => {

        //const isExisted = await authRepository.readOneByEmail(email);
        try{
            //if(isExisted) return;
            const data = await authRepository.join(email, nickname, password);
            return data;
        }catch(err){
            return json(err);
        };
    };

    register = async (user) => {

        //const isExisted = await authRepository.readOneByEmail(user.email);
        try{
            //if(!isExisted) return;
            const partner  = await authRepository.register(user);
            return partner;
        }catch(error){
            return json(error);
        };
    };

};