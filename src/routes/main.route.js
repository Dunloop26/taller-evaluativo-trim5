const express = require('express');
const routes = express.Router();

routes.post('/register', (req, res) => {
  return res.status(200).json({
    msg: "Test ok"
  })
});

module.exports = routes
