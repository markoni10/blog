import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());

// routes
import indexRouter from './routes/index.js';
import postsRouter from './routes/post/index.js';

app.use('/', indexRouter);
app.use('/posts', postsRouter);

app.use(logger('dev'));
app.use(cookieParser());
app.use(json());

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
