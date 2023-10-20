const BadRequestError = require('./badRequest')
const CustomAPiError = require('./customError')
const UnauthenticatedError = require('./UnauthenticationError')

module.exports = {
  BadRequestError,
  CustomAPiError,
  UnauthenticatedError,
}
