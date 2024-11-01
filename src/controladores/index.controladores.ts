import {Request, Response} from 'express'

import { pool } from '../database'

export const getUsers = async(req:Request, res: Response) =>{
    const {id}= req.params
	console.log(id)
    const result = await pool.query(`SELECT * FROM mostrar_hoja_trabajo_two(${id});`)
	console.log('result=',result.rows)

   res.json(result.rows)
   
}

//express query params

// 1./users/?id="awdawd"&value="fdfd"
//id, value
//req.url.params
//const {id, value}=req.url.params