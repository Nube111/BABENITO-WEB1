import { Router, Request, Response } from 'express';
const router = Router();

//router.get('/test', (req: Request, res: Response) => {
  //res.send('hello world');
//});

import {actualizarHojaTrabajo, createHojaTrabajo, createModelo, deleteHojaTrabajo, getHojaTrabajoPorEstado, getModelo, getUsers} from '../controladores/index.controladores'

//router.get('/users', getUsers);
router.get('/users/:id', getUsers);
router.get('/modelo/:id', getModelo);
router.post('/createHojaTrabajo', createHojaTrabajo);
router.post('/deleteHojaTrabajo', deleteHojaTrabajo);
router.post('/updateHojaTrabajo', actualizarHojaTrabajo);
router.post('/hoja-trabajo/estado', getHojaTrabajoPorEstado);
router.post('/createModelo', createModelo);
//router.post('/updateModelo',)
//router.post('/deleteModelo',)
//router.get('users/:id', getUsers); //usurio específico
//router.post('users', getUsers);
//router.put('users/:id', getUsers);
//router.delete('users/:id', getUsers);
//unodostres
export default router;
