const { body, validationResult } = require('express-validator')

module.exports = {
  params: [
    body("nombre").isString().withMessage("debe de ser un string")
      .notEmpty().withMessage("no debe estar vacío")
      .isLength({min: 1, max: 200}).withMessage("debe estar entre 1 y 200 caracteres"),
    body("precio").isNumeric().withMessage("debe de ser un número")
      .isLength({min:1, max: 1_000_000})
  ]
}
