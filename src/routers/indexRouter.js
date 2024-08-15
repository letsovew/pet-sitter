import express from 'express';
import routes from './routes.js';
import { authRouter } from './authRouter.js';
import { userRouter } from './userRouter.js';
import { partnerRouter } from './partnerRouter.js';
import { petRouter } from './petRouter.js';
import { postRouter } from './postRouter.js';
import { proposalRouter } from './proposalRouter.js';
import { contractRouter } from './contractRouter.js';

const indexRouter = express.Router();

indexRouter.use(authRouter);
indexRouter.use(userRouter);
indexRouter.use(partnerRouter);
indexRouter.use(petRouter);
indexRouter.use(postRouter);
indexRouter.use(proposalRouter);
indexRouter.use(contractRouter);

export { indexRouter };