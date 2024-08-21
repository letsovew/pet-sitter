import { UserRepository } from '../repositories/users.repository.js';

const userRepository = new UserRepository();

export class UserService {
    createProposal = async (userId, partnerId, title, content) => {
        if(!partnerId) return res.json('존재하지 않는 파트너입니다.');
        if(!title || !content) return res.json('모든 항목을 기재해 주십시오.');

        const data = await userRepository.createReq(userId, partnerId, title, content);
        if(!data) return res.json('서비스 요청을 실패하였습니다.');
        return{
            id: +data.id,
            userId: +data.userId,
            partnerId: +data.partnerId,
            title: data.title,
            content: data.content,
            createdAt: data.createdAt
        };
    };
}