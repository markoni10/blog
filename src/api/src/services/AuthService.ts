import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import HTTP_STATUS from '../enum/HttpStatus';
import ExtError from '../util/errors/ExtError';

import * as userRepository from "../repository/UserRepository";

export const signin = async (username: string, password: string) => {
    if(!username || !password) {
        throw new ExtError(HTTP_STATUS.BAD_REQUEST, 'You need to provide the credentials.');
    }

    const user = await userRepository.getUserByUsername(username);

    const validatePassword = validatePasswordForUser(user.id);
    const passwordValid = await validatePassword(password);

    if(!passwordValid) {
        throw new ExtError(HTTP_STATUS.UNAUTHORIZED, 'You are not authorized to access this resource.')
    }
}

export const welcome = async () => {
    return { message: 'OK' }
}

export const validatePasswordForUser = (id: number) => {
    return async (plainTextPassword: string) => {
        const { password } = await userRepository.getUserById(id);

        const validity = await bcrypt.compare(plainTextPassword, password);
        return validity;
    }
}