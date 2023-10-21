const { StatusCodes } = require('http-status-codes')
const CustomAPiError = require('./customError')

class NotFoundError extends CustomAPiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

module.exports = NotFoundError
