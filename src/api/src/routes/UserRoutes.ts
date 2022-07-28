import { Router } from "express";
import * as userController from "../controllers/UserController";

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);

export default router;