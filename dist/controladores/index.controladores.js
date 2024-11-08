"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHojaTrabajo = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const result = yield database_1.pool.query(`SELECT * FROM mostrar_hoja_trabajo_three(${id});`);
    console.log('result=', result.rows);
    res.json(result.rows);
});
exports.getUsers = getUsers;
const createHojaTrabajo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni, ruc, razon_social, priNom_cli, segNom_cli, apePat_cli, apeMat_cli, num_talla, cantidad, precio_total } = req.body;
    try {
        const result = yield database_1.pool.query(`CALL estado_hoja_trabajo_($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, [precio_total, dni, ruc, razon_social, priNom_cli, segNom_cli, apePat_cli, apeMat_cli, num_talla, cantidad]);
        res.json({ message: "Hoja de trabajo creada exitosamente." });
    }
    catch (error) {
        console.error('Error al crear la hoja de trabajo:', error);
        res.status(500).json({ error: 'Error al crear la hoja de trabajo' });
    }
});
exports.createHojaTrabajo = createHojaTrabajo;
//express query params
// 1./users/?id="awdawd"&value="fdfd"
//id, value
//req.url.params
//const {id, value}=req.url.params
