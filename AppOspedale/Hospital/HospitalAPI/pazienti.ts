import * as mysql from 'mysql2/promise';
import { Paziente } from './Models/paziente';
import { createHTTPResponseOK, createHTTPResponseKO } from './ResponseManager';

const dbConf = {
    host: 'myhospital.c4fqx9krr4gv.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Admin1234',
    database: 'Ospedale'
};





export const listaPz = async (event) =>{
    let connection;
    try{
        connection = await mysql.createConnection(dbConf);
        let query = `select p.id as id_paziente,
            p.codice,
            p.codice_colore,
            p.stato,
            r.id as id_reparto,
            r.nome as nome_reparto,
            r.descrizione,
            a.nome,
            a.cognome,
            a.codice_fiscale,
            a.data_nascita
        from Paziente p
        join Reparto r on p.reparto_id = r.id
        join Anagrafica a on p.anagrafica_id = a.id`;
        const [row]: Paziente[][] = await connection.execute(query) ;

        return createHTTPResponseOK(row);

    } catch (error){
        
        return createHTTPResponseKO(error);
    } finally{
        if(connection){
            connection.end();
        }
    }
};

export const accettaPz = async (event) =>{
    let connection;
    try{
        connection = await mysql.createConnection(dbConf);

        const [row]: Paziente[][] = await connection.execute('SELECT * FROM Paziente') ;

        return createHTTPResponseOK(row);

    } catch (error){
        return createHTTPResponseKO(error);
        
    } finally{
        if(connection){
            connection.end();
        }
    }};

export const trasferisciPz = async (event) =>{return "trasferisciPz";};

export const dimettiPz = async (event) =>{return "dimettiPz";};