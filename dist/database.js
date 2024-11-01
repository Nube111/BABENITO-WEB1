"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const dbConfig = {
    user: 'postgres',
    password: '280533',
    host: 'localhost',
    port: 5432,
    database: 'BABENITO_PROD',
};
exports.pool = new pg_1.Pool(dbConfig);
