import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import postsRouter from './routes/PostRoutes';
import usersRouter from './routes/UserRoutes';

const app = express();

app.use(cors());

// routers
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.use(logger('dev'));
app.use(cookieParser());
app.use(json());

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
