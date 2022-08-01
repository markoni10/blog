import { Router } from 'express';
import * as authController from '../controllers/AuthController';

const authRouter = Router();

authRouter.post('/signin', authController.signin);
authRouter.post('/signout', authController.signout);

export default authRouter;