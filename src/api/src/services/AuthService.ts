import { NextFunction, Request, Response } from 'express';

import HTTP_STATUS from '../enum/HttpStatus';
import ExtError from '../util/errors/ExtError';
import { comparePasswords } from '../util/authentication/authenticationFunctions';
import { isCredentialEmpty } from '../util/validation/fields';

import * as userRepository from "../repository/UserRepository";

const validateUserPassword = (userID: number) => {
    return async (plainTextPassword: string) => {
        const { password } = await userRepository.getUserById(userID);

        return await comparePasswords(password, plainTextPassword);
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    if (req.sessionID && req.session.user) {
        next();
    } else {
        res.status(HTTP_STATUS.UNAUTHORIZED);
        res.send({ message: 'You\'re not allowed to access this resource' });
    }
}

export const signin = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (req.session.user) {
        throw new ExtError(HTTP_STATUS.BAD_REQUEST, 'Already logged in');
    }

    const badRequestIfFieldEmpty = isCredentialEmpty(HTTP_STATUS.BAD_REQUEST);
    const throwErrorIfUsernameEmpty = badRequestIfFieldEmpty('Username');
    const throwErrorIfPasswordEmpty = badRequestIfFieldEmpty('Password');

    throwErrorIfUsernameEmpty(username);
    throwErrorIfPasswordEmpty(password);

    const user = await userRepository.getUserByUsername(username);
    const userID = user.id;

    const validatePassword = validateUserPassword(userID);
    const passwordValid = await validatePassword(password);

    if (!passwordValid) {
        throw new ExtError(HTTP_STATUS.UNAUTHORIZED, 'The given password is invalid.')
    }

    req.session.user = username;

    return { message: 'Successfuly logged in!' };
}

export const signout = async (req: Request, res: Response) => {
    req.session.destroy((err) => console.error(err));

    return { message: 'Successfuly logged out!' };
}
