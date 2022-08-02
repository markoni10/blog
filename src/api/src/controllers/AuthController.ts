import * as authService from '../services/AuthService';

import { Request, Response, NextFunction } from 'express';

import { processError } from '../util/errors/ProcessError';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await authService.authenticate(req, res, next);
    } catch (error) {
        processError(error, res);
    }
}

export const signin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.signin(req, res, next);

        res.send(result);
    } catch (error) {
        processError(error, res);
    }
}

export const signout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.signout(req, res, next);

        res.send(result);
    } catch (error) {
        processError(error, res);
    }
}
