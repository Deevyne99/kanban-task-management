const CustomAPiError = require('./customError')
const { StatusCodes } = require('http-status-codes')
class UnauthenticatedError extends CustomAPiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnauthenticatedError
