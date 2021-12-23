import { Router } from 'express';

import { server, app } from '../server';
import { roomRoutes } from './routes/api/room';

const router = Router();

app.use('/api/v1/room', roomRoutes(router));

export { server, app };
