const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors/index')
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication Failed')
  }
  const token = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_TOKEN)
    req.user = { userId: payload.userId, username: payload.username }
    next()
  } catch (error) {
    console.log(error)
    throw new UnauthenticatedError('Authentication Invalid')
  }
}
module.exports = authMiddleware
