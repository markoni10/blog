import * as userRepository from "../repository/UserRepository";
import { UserType } from '../types/user';

import { generatePasswordHash } from "../util/authentication/authenticationFunctions";

export const getAllUsers = async () => {
    const users = await userRepository.getAllUsers();

    return users;
}

export const getUserById = async (id: number) => {
    const user = await userRepository.getUserById(id);

    return user;
}

export const createUser = async (data: UserType) => {
    const { password } = data;
    data.password = generateUserPassword(password);

    return await userRepository.createUser(data);
}

export const deleteUser = async (id: number) => {
    return await userRepository.deleteUser(id);
}

export const updateUser = async (id: number, data: UserType) => {
    const { password } = data;
    data.password = generateUserPassword(password);

    return await userRepository.updateUser(id, data);
}

export const generateUserPassword = (password: string) => {
    const passwordHash: string = generatePasswordHash(password);

    return passwordHash;
}