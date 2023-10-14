const Board = require('../../models/Task')

const createBoard = async (req, res) => {
  try {
    const board = await Board.create(req.body)
    res.status(201).json({ board })
  } catch (error) {
    console.log(error)
  }
}
const getAllBoard = async (req, res) => {
  try {
    const boards = await Board.find({})
    res.status(200).json({ boards, nbHits: boards.length })
  } catch (error) {
    console.log(error)
  }
}
const getSingleBoard = async (req, res) => {
  try {
    const { id: boardID } = req.params
    const board = await Board.findOne({ _id: boardID })
    if (!board) {
      return res.status(404).json({ msg: `Board with id ${boardID} not found` })
    }
    res.status(200).json({ board })
  } catch (error) {
    console.log(error)
  }
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
    console.log(error)
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
