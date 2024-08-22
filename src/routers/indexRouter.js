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

indexRouter.use(routes.auth, authRouter);
indexRouter.use(routes.users, userRouter);
indexRouter.use(routes.partners, partnerRouter);
indexRouter.use(routes.pets, petRouter);
indexRouter.use(routes.posts, postRouter);
indexRouter.use(routes.proposals, proposalRouter);
indexRouter.use(routes.schedules, schedulesRouter);

export { indexRouter };