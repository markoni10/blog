import express from 'express';

const app = express();

export const index = app.get('/', (req, res) =>
	res.send({
		message: 'Hello from API!',
	}),
);
