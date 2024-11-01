import { Router, Request, Response } from 'express';
const router = Router();

//router.get('/test', (req: Request, res: Response) => {
  //res.send('hello world');
//});

import {getUsers} from '../controladores/index.controladores'

//router.get('/users', getUsers);
router.get('/users/:id', getUsers);
//router.get('users/:id', getUsers); //usurio específico
//router.post('users', getUsers);
//router.put('users/:id', getUsers);
//router.delete('users/:id', getUsers);

export default router;
