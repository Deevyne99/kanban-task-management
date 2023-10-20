const express = require('express')
const connectDB = require('./db/connect')
require('express-async-errors')
require('dotenv').config()
const board = require('./routes/board')
const app = express()
const notFound = require('./middlewares/notfound')
const errorHandlerMiddleware = require('./middlewares/errorHandler')
const authRouter = require('./routes/auth')
const authMiddleware = require('./middlewares/authMiddleware')
//MIDDLEWARES
app.use(express.json())
app.use('/api/v1/kanban/auth', authRouter)
app.use('/api/v1/kanban/board', authMiddleware, board)
app.use(errorHandlerMiddleware)
app.use(notFound)
//ROUTES
//board
// app.get('/api/v1/kanban/board', (req, res) => {
//   res.send('get all boards')
// })
// app.post('/api/v1/kanban/board', (req, res) => {
//   res.send('create a board')
// })
// app.get('/api/v1/kanban/board/:boardID', (req, res) => {
//   res.send('single board')
// })
// app.patch('/api/v1/kanban/board/:boardID', (req, res) => {
//   res.send('update board')
// })

// app.delete('/api/v1/kanban/board/:boardID', (req, res) => {
//   res.send('delete board')
// })

// Task

// app.post('/api/v1/kanban/task/:boardID', (req, res) => {
//   res.send('create task ')
// })
// app.patch('/api/v1/kanban/task/:taskID', (req, res) => {
//   res.send('update task')
// })
// app.delete('/api/v1/kanban/task/:taskID', (req, res) => {
//   res.send('delete task')
// })
// //subtask
// app.patch('/api/v1/kanban/task/subtask/:boardID/:taskID/', (req, res) => {
//   res.send('update task')
// })

// app.get('/', (req, res) => {
//   res.send('hello world')
// })
const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
