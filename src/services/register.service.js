const mysql = require('mysql2/promise');
const databaseSrv = require('../services/database-connection.service');
const bcryptSrv = require('../services/bcrypt.service');

module.exports = {
  register: async ({correo, nombres, apellidos, password}) => {

    const connection = await databaseSrv.createConnection();
    const verifyQuery = `SELECT * FROM usuarios WHERE correo="${correo}"`
    
    const result = await connection.query(verifyQuery)
    const data = result[0]
    
    console.log("Done consulting");
    if (data.length >= 1) {
      connection.end()
      throw new Error("El usuario ya existe")
    }

    const hash_password = await bcryptSrv.hash(password)
  
    const query = `INSERT INTO usuarios(correo, nombres, apellidos, password) VALUES("${correo}", "${nombres}", "${apellidos}", "${hash_password}")`
    const insertionResult = await connection.query(query);

    console.log("Done inserting");
    connection.end();
    return true
  }
}
