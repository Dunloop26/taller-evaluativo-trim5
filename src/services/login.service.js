const bcryptSrv = require('bcrypt');
const databaseSrv = require('../services/database-connection.service');
const tokenSrv = require('../services/token.service');

module.exports = {
  auth: async({correo, password}) => {
    const connection = await databaseSrv.createConnection();
    const [[  data  ]] = await connection.query(`SELECT password FROM usuarios WHERE correo="${correo}"`)
    if (!data) throw new Error("Invalid credentials");
    const hash = data.password
    connection.end();
    const validLogin = bcryptSrv.compare(password, hash)
    if (!validLogin) {
      throw new Error("Invalid credentials")
    } else {
      return tokenSrv.generate({correo})
    }
  }
}
