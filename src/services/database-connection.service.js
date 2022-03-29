const mysql = require('mysql2/promise')
module.exports = {
  createConnection: async () => {
    return await mysql.createConnection({
      user: 'eval',
      password: '1234',
      host: 'localhost',
      database: 'taller_evaluativo'
    })
  }
}
