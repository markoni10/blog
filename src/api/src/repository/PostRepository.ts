import { PrismaClient } from '../prisma';
import ExtError from '../util/errors/ExtError';

import HTTP_STATUS from '../enum/HttpStatus';

const prisma = new PrismaClient();
const postsTable = prisma.post;

export const getAllPosts = async () => {
    const posts = await postsTable.findMany();

    return posts;
}

export const getPostById = async (id: number) => {
    const post = await postsTable.findUnique({
        where: {
            id
        }
    });

    if(!post) {
        throw new ExtError(HTTP_STATUS.NOT_FOUND, "Post with the given ID was not found.")
    }

    return post;
}