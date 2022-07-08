import express from 'express';
import { PrismaClient } from '../../prisma/index.js';

const router = express.Router();

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
	const posts = await prisma.post.findMany();

	if (!posts) {
		res.send({ message: 'No posts found.' });
		return;
	}

	res.send(posts);
});

router.get('/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	const posts = await prisma.post.findUnique({
		where: {
			id,
		},
	});

	if (!posts) {
		res.send({ message: 'Post ID not found.' });
		return;
	}

	res.send(posts);
});

export default router;
