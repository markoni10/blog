import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();

// routes
import { index } from './routes/index.js';
import { posts } from './routes/post/index.js';

app.use('/', index);
app.use('/posts', posts);

app.use(logger('dev'));
app.use(cookieParser());
app.use(json());

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
