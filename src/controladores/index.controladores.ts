import {Request, Response} from 'express'

import { pool } from '../database'

export const getUsers = async(req:Request, res: Response) =>{
    const {id}= req.params
	console.log(id)
    const result = await pool.query(`SELECT * FROM mostrar_hoja_trabajo_three(${id});`)
	console.log('result=',result.rows)

   res.json(result.rows)
   
}

export const createHojaTrabajo = async (req: Request, res: Response): Promise<void> => {
    const {
        dni, ruc, razon_social, priNom_cli, segNom_cli,
        apePat_cli, apeMat_cli, num_talla, cantidad, precio_total
    } = req.body;

    try {
        const result = await pool.query(
            `CALL estado_hoja_trabajo_($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`,
            [precio_total, dni, ruc, razon_social, priNom_cli, segNom_cli, apePat_cli, apeMat_cli, num_talla, cantidad]
        );
        
        res.json({ message: "Hoja de trabajo creada exitosamente." });
    } catch (error) {
        console.error('Error al crear la hoja de trabajo:', error);
        res.status(500).json({ error: 'Error al crear la hoja de trabajo' });
    }
};
//express query params

// 1./users/?id="awdawd"&value="fdfd"
//id, value
//req.url.params
//const {id, value}=req.url.params