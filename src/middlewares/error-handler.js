import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { HttpError } from '../errors/http.error.js';

export const errorHandler = (err, req, res, next) => {
    console.error(err);

    // joi���� �߻��� ���� ó��
    if (err.name === 'ValidationError') {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
        status: HTTP_STATUS.BAD_REQUEST,
        message: err.message,
        });
    };

    //Http Error ó��
    if(err.status && err.message){
        return res.status(err.status).json({
            status: err.status,
            message: err.message,
        });
    }

    // �� ���� ����ġ ���� ���� ó��
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
        message: '����ġ ���� ������ �߻��߽��ϴ�. �����ڿ��� ������ �ּ���.',
    });
};