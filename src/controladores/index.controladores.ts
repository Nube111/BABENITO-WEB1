import {Request, Response} from 'express'

import { pool } from '../database'

//mostrar hoja de trabajo
export const getUsers = async(req:Request, res: Response) =>{
    const {id}= req.params
	console.log(id)
    const result = await pool.query(`SELECT * FROM mostrar_hoja_trabajo_three(${id});`)
	console.log('result=',result.rows)

   res.json(result.rows)
   
}

//mostrar modelo

export const getModelo = async(req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id);

    const result = await pool.query(`SELECT * FROM mostrar_modelo_func(${id});`);
    console.log('result from mostrar_modelo_func=', result.rows);
    res.json(result.rows)
}


//hoja trabajo por estado
export const getHojaTrabajoPorEstado = async (req: Request, res: Response): Promise<void> => {
    const { estado } = req.body;

    try {
        const result = await pool.query(
            `SELECT * FROM mostrar_hoja_trabajo_por_estado($1);`,
            [estado]
        );

        res.json(result.rows);  // Devolver las filas resultantes como respuesta JSON
    } catch (error) {
        console.error('Error al mostrar las hojas de trabajo por estado:', error);
        res.status(500).json({ error: 'Error al mostrar las hojas de trabajo por estado' });
    }
};

//crear hoja de tabajo
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


//eliminar hoja de trabajo
export const deleteHojaTrabajo = async (req: Request, res: Response): Promise<void> => {
    const { id_hoja } = req.body;

    try {
        const result = await pool.query(
            `CALL eliminar_hoja_trabajo_two($1);`,
            [id_hoja]
        );
        
        res.json({ message: `Hoja de trabajo con ID ${id_hoja} eliminada correctamente.` });
    } catch (error) {
        console.error('Error al eliminar la hoja de trabajo:', error);
        res.status(500).json({ error: 'Error al eliminar la hoja de trabajo' });
    }
};

//actualizar hoja de trabajo
export const actualizarHojaTrabajo = async (req: Request, res: Response): Promise<void> => {
    const {
        id_hoja, hora, fecha, cantidad_total, precio_total,
        num_talla, cantidad_producto, observaciones
    } = req.body;

    try {
        // Llamar al procedimiento almacenado con los datos proporcionados
        const result = await pool.query(
            `CALL actualizar_hoja_trabajo_two($1, $2, $3, $4, $5, $6, $7, $8);`,
            [
                id_hoja,
                hora || null,        // Si no se proporciona, se usa null
                fecha || null,       // Si no se proporciona, se usa null
                cantidad_total || null, // Si no se proporciona, se usa null
                precio_total || null,   // Si no se proporciona, se usa null
                num_talla || null,      // Si no se proporciona, se usa null
                cantidad_producto || null, // Si no se proporciona, se usa null
                observaciones || null   // Si no se proporciona, se usa null
            ]
        );
        
        res.json({ message: "Hoja de trabajo actualizada exitosamente." });
    } catch (error) {
        console.error('Error al actualizar la hoja de trabajo:', error);
        res.status(500).json({ error: 'Error al actualizar la hoja de trabajo' });
    }
};

// crear modelo


export const createModelo = async (req: Request, res: Response): Promise<void> => {
    const {
        planta, cod_venta, cod_cortado, c_cuero, desc_serie,
        color_forro, material,
        descripcion_aplique, color_aplique, codigo_apliques,
        nom_adorno, num_adorno,
        codigo_picador, descripcion_picador, color_picador,
        color_hilo, numero_hilo
    } = req.body;

    try {
        await pool.query(
            `CALL crear_modelo($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17);`,
            [
                planta, cod_venta, cod_cortado, c_cuero, desc_serie,
                color_forro, material,
                descripcion_aplique, color_aplique, codigo_apliques,
                nom_adorno, num_adorno,
                codigo_picador, descripcion_picador, color_picador,
                color_hilo, numero_hilo
            ]
        );

        res.json({ message: "Modelo creado exitosamente." });
    } catch (error) {
        console.error('Error al crear el modelo:', error);
        res.status(500).json({ error: 'Error al crear el modelo' });
    }
};


// actualizar modelo

// eliminar modelo 
