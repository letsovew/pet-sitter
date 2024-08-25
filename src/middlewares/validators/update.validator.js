import Joi from 'joi';
import { MESSAGES } from '../../constants/message.constant.js';

const schema = Joi.object({
    title: Joi.string(),
    content: Joi.string()
    })
    .min(1)
    .messages({
        'object.min': MESSAGES.POSTS.UPDATE.NO_BODY_DATA,
});

export const updatePostValidator = async (req, res, next) => {
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        next(error);
    }
};