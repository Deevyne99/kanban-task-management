const { StatusCodes } = require('http-status-codes')
const mongoose = require('mongoose')
const Board = require('../../models/Task')
const {
  BadRequestError,
  CustomAPiError,
  NotFoundError,
} = require('../../errors')

const createTask = async (req, res) => {
  const {
    params: { boardId },
    user: { userId },
    body: { title, description, subTasks: subtasks, status },
  } = req

  const board = await Board.findOne({
    _id: boardId,
    createdBy: userId,
  })
  if (!board) {
    throw new NotFoundError(`no board with id ${boardId}`)
  }
  const [name] = board.columns.filter((col) => col.name === status)
  if (!name) {
    throw new NotFoundError(`no column with the name ${status}`)
  }
  board.tasks.push({ title, description, subtasks, status })
  await board.save()
  res.status(StatusCodes.CREATED).json({ board })
}

const updateTask = async (req, res) => {
  const {
    params: { boardId, taskId },
    user: { userId },
    body: { title, description, subTasks: subtasks, status },
  } = req

  if (title === '' || description === '' || status === '' || !subtasks) {
    throw new BadRequestError(
      'Please enter a valid title, description, status, and subtasks'
    )
  }

  const findBoard = await Board.findOne({
    _id: boardId,
    createdBy: userId,
  })

  if (!findBoard) {
    throw new NotFoundError(`No board with the id ${boardId}`)
  }

  const task = findBoard.tasks.find((task) => task._id.toString() === taskId)

  if (!task) {
    throw new NotFoundError(`No task with the id ${taskId}`)
  }

  // Update task properties
  task.title = title
  task.description = description
  task.subtasks = subtasks
  task.status = status

  // Save the updated board
  const updatedBoard = await findBoard.save()

  res.status(StatusCodes.OK).json({ board: updatedBoard })
}

const deleteTask = async (req, res) => {
  const {
    user: { userId },
    params: { boardId, taskId },
  } = req

  const board = await Board.findOne({
    _id: boardId,
    createdBy: userId,
  })

  if (!board) {
    throw new NotFoundError(`No board with the id ${boardId}`)
  }

  const taskIndex = board.tasks.findIndex((task) => String(task._id) === taskId)
  if (taskIndex === -1) {
    throw new NotFoundError(`No task with the id ${taskId}`)
  }

  // Remove the task from the board's tasks array
  board.tasks.splice(taskIndex, 1)

  await board.save()

  res.status(StatusCodes.OK).json({ msg: 'Deleted successfully' })
}

module.exports = { createTask, updateTask, deleteTask }
