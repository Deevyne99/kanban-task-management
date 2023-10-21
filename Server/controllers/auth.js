const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const { BadRequestError, UnauthenticatedError } = require('../errors/index')
const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  res
    .status(StatusCodes.CREATED)
    .json({ user: { username: user.username }, token })
}

const login = async (req, res) => {
  //destructure
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('please provide your email and password')
  }
  //find user in the database
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid credentials')
  }
  //compare passwords
  const isPassword = await user.comparePassword(password)
  if (!isPassword) {
    throw new UnauthenticatedError('Invalid credential')
  }
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { username: user.username }, token })
}
module.exports = { register, login }
