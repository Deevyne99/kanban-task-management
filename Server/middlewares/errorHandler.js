const { CustomAPiError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPiError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
