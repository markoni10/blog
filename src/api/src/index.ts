import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import session from 'express-session';

import postsRouter from './routes/PostRoutes';
import usersRouter from './routes/UserRoutes';
import authRouter from './routes/AuthRoutes';

import * as authController from './controllers/AuthController';

import { generatePasswordHash } from './util/authentication/authenticationFunctions';

declare module 'express-session' {
    export interface SessionData {
        user: { [key: string]: any };
    }
}

const app = express();

const secretHash = generatePasswordHash('myawesomeblog');

app.use(session({
    secret: secretHash,
    resave: false,
    saveUninitialized: true
}));

app.use(cors());
app.use(json());
app.use(logger('dev'));
app.use(cookieParser());

app.use('/api/posts', postsRouter);
app.use('/api/users', authController.authenticate, usersRouter);
app.use('/auth', authRouter);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
