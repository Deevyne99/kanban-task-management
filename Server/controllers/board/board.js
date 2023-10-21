const { StatusCodes } = require('http-status-codes')
const {
  BadRequestError,
  CustomAPiError,
  NotFoundError,
} = require('../../errors')
const Board = require('../../models/Task')
const User = require('../../models/User')

const createBoard = async (req, res) => {
  const { boardName } = req.body
  const findBoard = await Board.findOne({ boardName: boardName })
  if (findBoard) {
    return res.status(404).json('Board already exist')
  }
  req.body.createdBy = req.user.userId
  const board = await Board.create(req.body)
  res.status(StatusCodes.CREATED).json({ board })
}
const getAllBoard = async (req, res) => {
  const boards = await Board.find({ createdBy: req.user.userId })
  res.status(200).json({ boards, nbHits: boards.length })
}

const getSingleBoard = async (req, res) => {
  const {
    user: { userId },
    params: { id: boardId },
  } = req
  const board = await Board.findOne({ _id: boardId })
  if (!board) {
    throw new NotFoundError(`no board with id ${boardId}`)
  }
  res.status(StatusCodes.OK).json({ board })
}
const updateBoard = async (req, res) => {
  try {
    const { id: boardID } = req.params
    const board = await Board.findOneAndUpdate({ _id: boardID }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!board) {
      return res.status(404).json({ msg: `Board with id ${boardID} not found` })
    }
    res.status(200).json({ board })
  } catch (error) {
    throw new Error(error)
  }
}
const deleteBoard = async (req, res) => {
  try {
    const { id: boardID } = req.params
    const board = await Board.findOneAndDelete({ _id: boardID })
    if (!board) {
      return res.status(404).json({ msg: `Board with id ${boardID} not found` })
    }
    res.status(200).json({ board })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createBoard,
  getAllBoard,
  getSingleBoard,
  updateBoard,
  deleteBoard,
}
