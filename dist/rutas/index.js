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
router.post('/createHojaTrabajo', index_controladores_1.createHojaTrabajo);
//router.get('users/:id', getUsers); //usurio específico
//router.post('users', getUsers);
//router.put('users/:id', getUsers);
//router.delete('users/:id', getUsers);
//unodostres
exports.default = router;
