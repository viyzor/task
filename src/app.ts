import express, { Express } from 'express';
import helmet from 'helmet';
import { postData, getData } from './controllers/dataController';

const app: Express = express();

app.use(helmet());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.post('/data', postData);
app.get('/data', getData);

export default app;