const express = require("express");
const routes = express.Router();
const { validate } = require("../validators/base-validator");
const registerValidator = require("../validators/register.validator");
const registerSrv = require("../services/register.service");


routes.post("/register", registerValidator.params, validate,async (req, res) => {
  try {
    await registerSrv.register(req.body)
  } catch(e) {
    console.error("Register error: ", e);
    return res.status(500).json({
      msg: "Algo anda mal",
      error: e.message
    })
  }
  return res.status(200).json({
    msg: "Registro Ok",
  });
});

module.exports = routes;
