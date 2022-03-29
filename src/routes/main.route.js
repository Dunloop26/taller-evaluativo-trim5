const express = require("express");
const routes = express.Router();
const { validate } = require("../validators/base-validator");
const registerValidator = require("../validators/register.validator");
const loginValidator = require("../validators/login.validator");
const createProductValidator = require("../validators/create-product.validator");
const registerSrv = require("../services/register.service");
const loginSrv = require("../services/login.service");
const createProductSrv = require("../services/create-product.service");


routes.post("/register", registerValidator.params, validate, async (req, res) => {
  try {
    await registerSrv.register(req.body)
  } catch (e) {
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

routes.post("/login", loginValidator.params, validate, async (req, res) => {
  try {
    const token = await loginSrv.auth(req.body)
    return res.status(200).json({
      msg: "Login ok",
      token
    })
  } catch(e) {
    console.error("Login error: ", e);
    return res.status(500).json({
      msg: "Algo anda mal",
      error: e.message
    })
  }
})

routes.post("/crearproducto", createProductValidator.params, validate, async(req, res) => {
  try {
    await createProductSrv.create(req.body);
    return res.status(200).json({
      msg: `Producto "${req.body.nombre}" creado`
    })
  } catch(e) {
    console.error("Create Product Error: ", e)
    return res.status(500).json({
      msg: "Algo anda mal",
      error: e.message
    })
  }
})

module.exports = routes;
