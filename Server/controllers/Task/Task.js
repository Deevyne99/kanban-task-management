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

  const board = await Board.findOne({ _id: boardId, createdBy: userId })

  if (!board) {
    throw new NotFoundError(`No board with the id ${boardId}`)
  }

  const currentColumn = board.columns.find((col) =>
    col.tasks.some((task) => task._id.toString() === taskId)
  )

  if (!currentColumn) {
    throw new NotFoundError(`No column with a task with the id ${taskId}`)
  }

  const destinationColumn = board.columns.find((col) => col.name === status)

  if (!destinationColumn) {
    throw new NotFoundError(`No column with the name ${status}`)
  }

  const task = currentColumn.tasks.find(
    (task) => task._id.toString() === taskId
  )

  // Check if status has changed and move task to the appropriate column
  if (task.status !== status) {
    // Remove task from current column
    currentColumn.tasks = currentColumn.tasks.filter(
      (task) => task._id.toString() !== taskId
    )
    // Add task to the destination column
    destinationColumn.tasks.push(task)
  }

  // Update the task's properties
  task.title = title
  task.description = description
  task.subTasks = subtasks
  task.status = status

  await board.save()

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
