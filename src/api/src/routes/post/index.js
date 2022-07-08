import express from 'express';

const app = express();

export const posts = app.get('/', (req, res) =>
	res.send({
		message: 'Hello from /posts route',
	}),
);
