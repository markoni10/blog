import bcrypt from "bcrypt";

import HTTP_STATUS from '../../enum/HttpStatus';
import { isCredentialEmpty } from '../validation/fields';

export const generatePasswordHash = (password: string) => {
    const password_salt = bcrypt.genSaltSync();
    const password_hash = bcrypt.hashSync(password, password_salt);

    return password_hash;
}

export const comparePasswords = async (passwordHash: string, plainTextPassword: string) => {
    const isPasswordEmpty = isCredentialEmpty(HTTP_STATUS.BAD_REQUEST);
    const throwErrorIfPasswordEmpty = isPasswordEmpty('Password');

    throwErrorIfPasswordEmpty(plainTextPassword);

    return await bcrypt.compare(plainTextPassword, passwordHash);
}