const express = require('express')
const router = express.Router()
const {
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/Task/Task')

router.route('/:boardId').post(createTask)
router.route('/:boardId/:columnId/:taskId').patch(updateTask).delete(deleteTask)

module.exports = router
