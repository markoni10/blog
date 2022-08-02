import { Router, urlencoded } from "express";
import * as userController from "../controllers/UserController";
import { authorize } from '../services/AuthService';

const usersRouter = Router();

usersRouter.get('/', urlencoded({ extended: false }), userController.getAllUsers);
usersRouter.get('/:id', userController.getUserById);
usersRouter.post('/', authorize, userController.createUser);
usersRouter.delete('/:id', userController.deleteUser);
usersRouter.put('/:id', userController.updateUser);

export default usersRouter;