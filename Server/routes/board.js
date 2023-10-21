const express = require('express')
const {
  getAllBoard,
  getSingleBoard,
  deleteBoard,
  createBoardColumns,
  createBoard,
} = require('../controllers/board/board')

const router = express.Router()

router.route('/').get(getAllBoard).post(createBoard)
router
  .route('/:id')
  .get(getSingleBoard)
  .patch(createBoardColumns)
  .delete(deleteBoard)

module.exports = router
