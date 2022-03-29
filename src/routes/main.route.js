const express = require('express');
const routes = express.Router();
const { validate } = require('../validators/base-validator')
const registerValidator = require('../validators/register.validator')

routes.post('/register', registerValidator.params, validate, (req, res) => {
  return res.status(200).json({
    msg: "Test ok"
  })
});

module.exports = routes
