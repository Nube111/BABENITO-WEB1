"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//router.get('/test', (req: Request, res: Response) => {
//res.send('hello world');
//});
const index_controladores_1 = require("../controladores/index.controladores");
//router.get('/users', getUsers);
router.get('/users/:id', index_controladores_1.getUsers);
router.get('/modelo/:id', index_controladores_1.getModelo);
router.post('/createHojaTrabajo', index_controladores_1.createHojaTrabajo);
router.post('/deleteHojaTrabajo', index_controladores_1.deleteHojaTrabajo);
router.post('/updateHojaTrabajo', index_controladores_1.actualizarHojaTrabajo);
router.post('/hoja-trabajo/estado', index_controladores_1.getHojaTrabajoPorEstado);
router.post('/createModelo', index_controladores_1.createModelo);
//router.post('/updateModelo',)
//router.post('/deleteModelo',)
//router.get('users/:id', getUsers); //usurio específico
//router.post('users', getUsers);
//router.put('users/:id', getUsers);
//router.delete('users/:id', getUsers);
//unodostres
exports.default = router;
