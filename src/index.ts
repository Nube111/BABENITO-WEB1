import express from 'express'
import indexRutas from './rutas/index'
import  {pool} from './database'

const app = express ();

//middlewars
app.use(express.json()); // rspa 
app.use(express.urlencoded({extended:false})); //enviar datos de forms se convierte en json

//rutas

app.use('/',indexRutas); 
//console.log(pool)

//servidor
app.listen(4000);
console.log('server on port', 4000);
