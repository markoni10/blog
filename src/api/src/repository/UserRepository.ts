import { PrismaClient } from '@prisma/client';
import ExtError from '../util/errors/ExtError';

import HTTP_STATUS from '../enum/HttpStatus.js';

const prisma = new PrismaClient();
const prismaUser = prisma.user;

export const getAllUsers = async () => {
    const users = await prismaUser.findMany();

    return users;
}

export const getUserById = async (id: number) => {
    const user = await prismaUser.findUnique({
        where:{
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

    if (!user)
		throw new ExtError(HTTP_STATUS.NOT_FOUND, "User with the given email was not found.");

    return user;
}

export const createUser = async (data: any) => {
    const user = await prismaUser.create({data})

    if(!user)
        throw new ExtError(HTTP_STATUS.BAD_REQUEST, "The data you provided is invalid.");

    return user;
}
