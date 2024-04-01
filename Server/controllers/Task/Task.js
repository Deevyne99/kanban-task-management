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
  name.tasks.push({ title, description, subtasks, status })
  await board.save()
  res.status(StatusCodes.CREATED).json({ board })
}

const updateTask = async (req, res) => {
  const {
    params: { boardId, columnId, taskId },
    user: { userId },
    body: { title, description, subTasks: subtasks, status },
  } = req

  if (title === '' || description === '' || status === '' || !subtasks) {
    throw new BadRequestError(
      'Please enter a valid title, description, status, and subtasks'
    )
  }

  const board = await Board.findOneAndUpdate(
    {
      _id: boardId,
      createdBy: userId,
      'columns._id': columnId, // No need to convert to ObjectId, assuming columnId is already a string
      'columns.tasks._id': taskId, // No need to convert to ObjectId
    },
    {
      $set: {
        'columns.$[col].tasks.$[task].title': title,
        'columns.$[col].tasks.$[task].description': description,
        'columns.$[col].tasks.$[task].status': status,
        'columns.$[col].tasks.$[task].subtasks': subtasks,
      },
    },
    {
      arrayFilters: [{ 'col._id': columnId }, { 'task._id': taskId }],
      upsert: true,
      new: true,
    }
  )

  if (!board) {
    throw new NotFoundError(`No board with the id ${board}`)
  }

  res.status(StatusCodes.OK).json({ board })
}

const deleteTask = async (req, res) => {
  const {
    user: { userId },
    params: { boardId, columnId, taskId },
  } = req
  const board = await Board.findOne({
    _id: boardId,
    createdBy: userId,
  })
  if (!board) {
    throw new NotFoundError(`no board with the id ${board}`)
  }

  const [column] = board.columns.filter((col) => String(col._id) === columnId)
  if (!column) {
    throw new NotFoundError(`no column with the name ${columnId}`)
  }
  const [task] = column.tasks.filter((item) => String(item._id) === taskId)
  if (!task) {
    throw new NotFoundError(`no task with the name ${taskId}`)
  }
  column.tasks = column.tasks.filter((item) => String(item._id) !== taskId)

  await board.save()

  res.status(StatusCodes.OK).json({ msg: 'Deleted successfully' })
}
module.exports = { createTask, updateTask, deleteTask }
