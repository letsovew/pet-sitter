import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { HttpError } from '../errors/http.error.js';

export const errorHandler = (err, req, res, next) => {
    console.error(err);

    // joi에서 발생한 에러 처리
    if (err.name === 'ValidationError') {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
        status: HTTP_STATUS.BAD_REQUEST,
        message: err.message,
        });
    };

    //Http Error 처리
    if(err.status && err.message){
        return res.status(err.status).json({
            status: err.status,
            message: err.message,
        });
    }

    // 그 밖의 예상치 못한 에러 처리
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
        message: 'An unexpected error occurred, please contact your administrator.',
    });
};