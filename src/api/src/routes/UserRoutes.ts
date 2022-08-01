import { Router } from "express";
import * as userController from "../controllers/UserController";

const usersRouter = Router();

usersRouter.get('/', userController.getAllUsers);
usersRouter.get('/:id', userController.getUserById);
usersRouter.post('/', userController.createUser);
usersRouter.delete('/:id', userController.deleteUser);
usersRouter.put('/:id', userController.updateUser);

export default usersRouter;