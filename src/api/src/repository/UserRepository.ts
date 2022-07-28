import { PrismaClient } from '../prisma';
import ExtError from '../util/errors/ExtError';

import HTTP_STATUS from '../enum/HttpStatus.js';

import { UserType } from '../types/user';

const prisma = new PrismaClient();
const prismaUser = prisma.user;

export const getAllUsers = async () => {
    const users = await prismaUser.findMany();

    return users;
}

export const getUserById = async (id: number) => {
    const user = await prismaUser.findUnique({
        where: {
            id
        }
    });

    if (!user)
		throw new ExtError(HTTP_STATUS.NOT_FOUND, "User with the given ID was not found.");

    return user;
}

export const getUserByEmail = async (email: string) => {
    const user = await prismaUser.findUnique({
        where:{
            email
        }
    });

    return user;
}

export const createUser = async (data: UserType) => {
    const userFound = await getUserByEmail(data.email);
    userFound
    if(!userFound)
        throw new ExtError(HTTP_STATUS.BAD_REQUEST, "The user with the given email already exists.");

    const user = await prismaUser.create({data})

    if(!user)
        throw new ExtError(HTTP_STATUS.BAD_REQUEST, "The data you provided is invalid.");

    return user;
}

export const deleteUser = async (id: number) => {
    const userFound = await getUserById(id);

    if(!userFound)
        throw new ExtError(HTTP_STATUS.NOT_FOUND, "User with the given ID was not found.");

    const user = await prismaUser.delete({
        where: {
            id
        }
    })

    return user;
}

export const updateUser = async (id: number, data: UserType) => {
    const userFound = await getUserById(id);

    if(!userFound)
        throw new ExtError(HTTP_STATUS.NOT_FOUND, "User with the given ID was not found.");

    const user = await prismaUser.update({
        where: {
            id
        },
        data
    })

    return user;
}