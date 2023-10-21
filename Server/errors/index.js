const BadRequestError = require('./badRequest')
const CustomAPiError = require('./customError')
const NotFoundError = require('./notFoundError')
const UnauthenticatedError = require('./UnauthenticationError')

module.exports = {
  BadRequestError,
  CustomAPiError,
  UnauthenticatedError,
  NotFoundError,
}
