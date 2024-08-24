import Joi from 'joi';
import { MESSAGES } from '../../constants/message.constant.js';

const schema = Joi.object({
    title: Joi.string().required().messages({
        'any.required': MESSAGES.POSTS.COMMON.TITLE.REQUIRED,
    }),
    content: Joi.string().required().messages({
        'any.required': MESSAGES.POSTS.COMMON.CONTENT.REQUIRED,
    }),
});

export const createPostValidator = async (req, res, next) => {
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        next(error);
    }
};