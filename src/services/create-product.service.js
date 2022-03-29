const databaseSrv = require("../services/database-connection.service");
const tokenSrv = require("../services/token.service");

module.exports = {
  create: async (nombre, precio, token) => {

    await tokenSrv.verify(token);

    const connection = await databaseSrv.createConnection()
    const [[ data ]] = await connection.query(`SELECT nombre FROM productos WHERE nombre="${nombre}"`)
    console.log(data);
    if (!!data) {
      connection.end();
      throw new Error("Producto ya registrado");
    }
    await connection.query(`INSERT INTO productos(nombre, precio) VALUES("${nombre}", ${precio})`)
    connection.end();
  }
}
