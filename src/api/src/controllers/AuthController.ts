import * as AuthService from '../services/AuthService';

import { Request, Response } from 'express';

import { processError } from '../util/errors/ProcessError';

export const signin = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const result = await AuthService.signin(username, password);

        res.send(result);
    } catch (error) {
        processError(error, res);
    }
}

export const welcome = async (req: Request, res: Response) => {
    try {
        const result = await AuthService.welcome();

        res.send(result);
    } catch (error) {
        processError(error, res);
    }
}
