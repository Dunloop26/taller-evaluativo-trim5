const databaseSrv = require("../services/database-connection.service")

module.exports = {
  create: async ({ nombre, precio }) => {
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
