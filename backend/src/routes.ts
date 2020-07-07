import { Router } from 'express';

import UserController from './Controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users/create', UserController.create);

export default routes;
