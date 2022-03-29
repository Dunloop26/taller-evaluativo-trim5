const mysql = require('mysql2/promise');
const databaseSrv = require('../services/database-connection.service')

module.exports = {
  register: async ({correo, nombres, apellidos, password}) => {

    const connection = await databaseSrv.createConnection();
    const verifyQuery = `SELECT * FROM usuarios WHERE correo="${correo}"`
    
    const result = await connection.query(verifyQuery)
    const data = result[0]
    
    console.log("Done consulting");
    if (data.length >= 1) throw new Error("El usuario ya existe")
  
    const query = `INSERT INTO usuarios(correo, nombres, apellidos, password) VALUES("${correo}", "${nombres}", "${apellidos}", "${password}")`
    const insertionResult = await connection.query(query);

    console.log("Done inserting");
    return true
  }
}
