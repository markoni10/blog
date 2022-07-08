import express from 'express';
const app = express();
const indexRouter = app.get('/', (req, res) => res.send({
    message: 'Hello from API!',
}));
export default indexRouter;
