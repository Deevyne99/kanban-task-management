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
    throw new BadRequestError('Board already exist')
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
  const board = await Board.findOne({ _id: boardId, createdBy: userId })
  if (!board) {
    throw new NotFoundError(`no board with id ${boardId}`)
  }
  res.status(StatusCodes.OK).json({ board })
}

const createBoardColumns = async (req, res) => {
  const {
    user: { userId },
    params: { id: boardId },
    body: { name },
  } = req

  const board = await Board.findOne({ _id: boardId, createdBy: userId })

  if (!board) {
    throw new NotFoundError(`no board with id ${boardId}`)
  }
  if (!name) {
    throw new BadRequestError('Please provide a column name')
  }

  board.columns.push({ name: name })
  await board.save()
  res.status(StatusCodes.OK).json({ board })
}
const deleteBoard = async (req, res) => {
  const {
    user: { userId },
    params: { id: boardId },
  } = req
  const board = await Board.findOneAndDelete({
    _id: boardId,
    createdBy: userId,
  })
  if (!board) {
    throw new NotFoundError(`no board with id ${boardId}`)
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: `board with id ${boardId} was deleted successful` })
}
const updateBoard = async (req, res) => {
  const {
    user: { userId },
    body: { boardName, columns },
    params: { id: boardId },
  } = req
  const board = await Board.findOne({ _id: boardId, createdBy: userId })
  if (!board) {
    throw new NotFoundError(`no board with id ${boardId}`)
  }
  board.boardName = boardName
  board.columns = columns
  await board.save()
  res
    .status(StatusCodes.OK)
    .json({ msg: `board with id ${boardId} was deleted successful`, board })
}

module.exports = {
  createBoard,
  getAllBoard,
  getSingleBoard,
  createBoardColumns,
  deleteBoard,
  updateBoard,
}
