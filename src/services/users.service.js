import { UserRepository } from '../repositories/users.repository.js';

const userRepository = new UserRepository();

export class UserService {
    createProposal = async (userId, partnerId, title, content) => {
        if(!partnerId) return res.json('�������� �ʴ� ��Ʈ���Դϴ�.');
        if(!title || !content) return res.json('��� �׸��� ������ �ֽʽÿ�.');

        const data = await userRepository.createReq(userId, partnerId, title, content);
        if(!data) return res.json('���� ��û�� �����Ͽ����ϴ�.');
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