const Task = require('../../models/Task')

const createBoard = async (req, res) => {
  try {
    res.status(200).send('create board')
  } catch (error) {
    console.log(error)
  }
}
const getBoard = (req, res) => {
  res.send('hello')
}
const getSingleBoard = async (req, res) => {
  try {
    res.status(200).send('get single task')
  } catch (error) {
    console.log(error)
  }
}
const updateBoard = async (req, res) => {
  try {
    res.status(200).send('update task')
  } catch (error) {
    console.log(error)
  }
}
const deleteBoard = async (req, res) => {
  try {
    res.status(200).send('Delete task')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createBoard,
  getBoard,
  getSingleBoard,
  updateBoard,
  deleteBoard,
}
