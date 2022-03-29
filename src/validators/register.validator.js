const { body, validationResult } = require('express-validator');

module.exports = {
  params: [
    body('nombres').isString().withMessage("debe de ser un string")
      .notEmpty().withMessage("no puede estar vacío")
      .isLength({ min: 1, max: 200 }).withMessage("el valor debe de estar entre 1 y 200 caracteres"),
    body('apellidos').isString().withMessage("debe de ser un string")
      .notEmpty().withMessage("no puede estar vacío")
      .isLength({ min: 1, max: 200 }).withMessage("el valor debe de estar entre 1 y 200 caracteres"),
    body('password').isString().withMessage("debe de ser un string")
      .notEmpty().withMessage("no puede estar vacío")
      .isLength({ min: 8, max: 12 }).withMessage("el valor debe de estar entre 8 y 12 caracteres"),
    body('correo').isString().withMessage("debe de ser un string")
      .notEmpty().withMessage("no puede estar vacío")
      .isEmail().withMessage("debe de ser un email válido")
  ]
}
