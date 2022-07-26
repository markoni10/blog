import { Router } from 'express';
import * as postController from '../controllers/PostController';

const postsRouter = Router();

postsRouter.get('/', postController.getAllPosts);
postsRouter.get('/:id', postController.getPostById);

export default postsRouter;