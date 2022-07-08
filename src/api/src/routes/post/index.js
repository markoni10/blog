import express from 'express';
import { PrismaClient } from '../../prisma/index.js';

const app = express();

const prisma = new PrismaClient();

export const posts = app.get('/', async (req, res) => {
	const posts = await prisma.post.findMany();
	res.send({
		posts,
	});
});
