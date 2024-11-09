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
exports.actualizarHojaTrabajo = exports.deleteHojaTrabajo = exports.createHojaTrabajo = exports.getModelo = exports.getUsers = void 0;
const database_1 = require("../database");
//mostrar hoja de trabajo
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const result = yield database_1.pool.query(`SELECT * FROM mostrar_hoja_trabajo_three(${id});`);
    console.log('result=', result.rows);
    res.json(result.rows);
});
exports.getUsers = getUsers;
//mostrar modelo
const getModelo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const result = yield database_1.pool.query(`SELECT * FROM mostrar_modelo_func(${id});`);
    console.log('result from mostrar_modelo_func=', result.rows);
    res.json(result.rows);
});
exports.getModelo = getModelo;
//crear hoja de tabajo
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
//eliminar hoja de trabajo
const deleteHojaTrabajo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_hoja } = req.body;
    try {
        const result = yield database_1.pool.query(`CALL eliminar_hoja_trabajo_two($1);`, [id_hoja]);
        res.json({ message: `Hoja de trabajo con ID ${id_hoja} eliminada correctamente.` });
    }
    catch (error) {
        console.error('Error al eliminar la hoja de trabajo:', error);
        res.status(500).json({ error: 'Error al eliminar la hoja de trabajo' });
    }
});
exports.deleteHojaTrabajo = deleteHojaTrabajo;
//actualizar hoja de trabajo
const actualizarHojaTrabajo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_hoja, hora, fecha, cantidad_total, precio_total, num_talla, cantidad_producto, observaciones } = req.body;
    try {
        // Llamar al procedimiento almacenado con los datos proporcionados
        const result = yield database_1.pool.query(`CALL actualizar_hoja_trabajo_two($1, $2, $3, $4, $5, $6, $7, $8);`, [
            id_hoja,
            hora || null, // Si no se proporciona, se usa null
            fecha || null, // Si no se proporciona, se usa null
            cantidad_total || null, // Si no se proporciona, se usa null
            precio_total || null, // Si no se proporciona, se usa null
            num_talla || null, // Si no se proporciona, se usa null
            cantidad_producto || null, // Si no se proporciona, se usa null
            observaciones || null // Si no se proporciona, se usa null
        ]);
        res.json({ message: "Hoja de trabajo actualizada exitosamente." });
    }
    catch (error) {
        console.error('Error al actualizar la hoja de trabajo:', error);
        res.status(500).json({ error: 'Error al actualizar la hoja de trabajo' });
    }
});
exports.actualizarHojaTrabajo = actualizarHojaTrabajo;
