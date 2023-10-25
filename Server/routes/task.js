const express = require('express')
const router = express.Router()
const {
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/Task/Task')

router.route('/:boardId').post(createTask).patch(updateTask)
router.route('/:boardId/:taskId').delete(deleteTask)
module.exports = router
