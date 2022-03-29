const { body, validationResult } = require('express-validator')

module.exports = {
  params: [
    body('correo').notEmpty().withMessage("no debe estar vacio")
      .isString().withMessage("debe de ser de tipo string")
      .isEmail().withMessage("debe de ser un correo electrónico válido"),
    body('password').notEmpty().withMessage("no debe estar vacio")
      .isString().withMessage("debe de ser de tipo string")
      .isLength({ min: 8, max: 12 }).withMessage("debe ser entre 8 y 12 caracteres de longitud"),
  ]
}
