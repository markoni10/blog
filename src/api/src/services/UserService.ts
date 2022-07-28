import HTTP_STATUS from "../enum/HttpStatus";
import * as userRepository from "../repository/UserRepository";

import { generatePasswordHash } from "../util/authentication/authenticationFunctions";
import ExtError from "../util/errors/ExtError";

export const getAllUsers = async () => {
    const users = await userRepository.getAllUsers();

    return users;
}

export const getUserById = async (id: number) => {
    const user = await userRepository.getUserById(id);

    return user;
}

export const checkIfEmailExists = async (email: string) => {
    const user = await userRepository.getUserByEmail(email);

    if(user)
        return true;
    
    return false;
}

export const createUser = async (data: any) => {
    const { email, password } = data;
    
    const emailExists = await checkIfEmailExists(email);
    
    if(emailExists)
        throw new ExtError(HTTP_STATUS.BAD_REQUEST, "The user with the given email already exists.");

    const password_hash = generatePasswordHash(password);
    data.password = password_hash;

    return await userRepository.createUser(data);
}

export const deleteUser = async (id: number) => {
    return await userRepository.deleteUser(id);
}
