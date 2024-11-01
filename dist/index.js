"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./rutas/index"));
const app = (0, express_1.default)();
//middlewars
app.use(express_1.default.json()); // rspa 
app.use(express_1.default.urlencoded({ extended: false })); //enviar datos de forms se convierte en json
//rutas
app.use('/', index_1.default);
//console.log(pool)
//servidor
app.listen(4000);
console.log('server on port', 4000);
