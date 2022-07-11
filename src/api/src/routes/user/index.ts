import express, { Router, Request, Response } from 'express';
import { PrismaClient } from '../../prisma/index.js';
import bcrypt from 'bcrypt';

const router = Router();

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



router.post('/', async (req, res) => {
	const { email, username, password } = req.body;

	const password_salt = bcrypt.genSaltSync();
	const password_hash = bcrypt.hashSync(password, password_salt);

	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {

		await prisma.user.create({
			data: {
				email,
				username,
				password: password_hash,
			},
		});

		return res.send({ message: 'User created.' });
	}

	res.send({ message: 'User with that email already exists.' });
});

export default router;
