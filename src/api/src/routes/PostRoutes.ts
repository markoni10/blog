import { Router } from 'express';
import * as postController from '../controllers/PostController';
import { authenticate } from '../services/AuthService';

const postsRouter = Router();

postsRouter.get('/', postController.getAllPosts);
postsRouter.get('/:id', postController.getPostById);
postsRouter.post('/', authenticate, postController.createPost);
postsRouter.delete('/:id', authenticate, postController.deletePost);
postsRouter.put('/:id', authenticate, postController.updatePost);

export default postsRouter;