import * as PostService from '../services/PostService';

import { Request, Response } from 'express';

import { processError } from '../util/errors/ProcessError';

export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const result = await PostService.getAllPosts();

        res.send(result);
    } catch (error) {
        processError(error, res);
    }
}

export const getPostById = async (req: Request, res: Response) => {
    try {
        const postID = parseInt(req.params.id);
        const result = await PostService.getPostById(postID);

        res.send(result);
    } catch (error) {
        processError(error, res);
    }
}