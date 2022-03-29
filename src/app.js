const express = require('express')
const app = express()
const mainRoutes = require('./routes/main.route')

app.use(express.json())
app.use(mainRoutes)

module.exports = app
