import express from 'express';
import { PrismaClient } from '../../prisma/index.js';

const router = express.Router();

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
	const users = await prisma.user.findMany();

	if (!users || !users.length) {
		res.send({ message: 'No users found.' });
		return;
	}

	res.send(users);
});

router.get('/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	const user = await prisma.user.findUnique({
		where: {
			id,
		},
	});

	if (!user) {
		res.send({ message: 'User not found.' });
		return;
	}

	res.send(user);
});

export default router;
