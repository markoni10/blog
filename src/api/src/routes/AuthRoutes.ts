import { Router } from 'express';
import * as authController from '../controllers/AuthController';

const authRouter = Router();

authRouter.get('/welcome', authController.welcome);
authRouter.post('/signin', authController.signin);

export default authRouter;