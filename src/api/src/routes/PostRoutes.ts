import { Router } from 'express';
import * as postController from '../controllers/PostController';

const postsRouter = Router();

postsRouter.get('/', postController.getAllPosts);
postsRouter.get('/:id', postController.getPostById);
postsRouter.post('/', postController.createPost);
postsRouter.delete('/:id', postController.deletePost);


export default postsRouter;