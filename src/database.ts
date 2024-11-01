import  {Pool} from 'pg'

const dbConfig = {
	user: 'postgres',
	password: '280533',
	host: 'localhost',
	port: 5432,
	database: 'BABENITO_PROD',
};

export const pool = new Pool (
   dbConfig 
);


