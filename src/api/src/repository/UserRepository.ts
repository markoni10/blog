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

const checkIfTaken = (id: number) => async (type: string, field: string) => {
   const where = {
        NOT: [
            {
                id: {
                    equals: id
                }

            }
        ],
        OR: [
            {
                [type]: {
                    equals: field 
                }
            } 
        ]
    }

    const fieldTaken = await prismaUser.findMany({ where });

    return !!fieldTaken.length;
}

export const getUserByUsername = async (username: string) => {
    const user = await prismaUser.findUnique({
        where:{
            username
        }
    });

    return user;
}

export const createUser = async (data: UserType) => {
    const userEmailExists = await getUserByEmail(data.email);
    const usernameExists = await getUserByUsername(data.username);

    if(userEmailExists)
        throw new ExtError(HTTP_STATUS.BAD_REQUEST, "The user with the given email already exists.");

    if(usernameExists)
        throw new ExtError(HTTP_STATUS.BAD_REQUEST, "The user with the given username already exists.");

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

    const checkIfFieldTaken = checkIfTaken(id);
    const emailTaken = await checkIfFieldTaken('email', data.email);
    const usernameTaken = await checkIfFieldTaken('username', data.username);

    if(emailTaken) {
        throw new ExtError(HTTP_STATUS.BAD_REQUEST, 'The given email address is already in use.');
    }

    if(usernameTaken) {
        throw new ExtError(HTTP_STATUS.BAD_REQUEST, 'The given username is already in use.');
    }

    const user = await prismaUser.update({
        where: {
            id
        },
        data
    })

    return user;
}