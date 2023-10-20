const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors/index')
const authMiddleware = (req, res, next) => {
  const authHeaders = req.headers.authorization
  if (!authHeaders || !authHeaders.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication Failed')
  }
  const token = authHeaders.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_TOKEN)
    req.user = { userId: payload.userId, username: payload.username }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication Invalid')
  }
}
module.exports = authMiddleware
