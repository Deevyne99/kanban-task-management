const express = require('express')
const connectDB = require('./db/connect')
require('express-async-errors')
require('dotenv').config()
const board = require('./routes/board')
const task = require('./routes/task')
const app = express()
const notFound = require('./middlewares/notfound')
const errorHandlerMiddleware = require('./middlewares/errorHandler')
const authRouter = require('./routes/auth')
const authMiddleware = require('./middlewares/authMiddleware')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')
//MIDDLEWARES
app.use(express.json())

app.use(helmet())
app.use(cors())
app.use(xss())

app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
)
app.use('/api/v1/kanban/auth', authRouter)
app.use('/api/v1/kanban/board', authMiddleware, board)
app.use('/api/v1/kanban/board/task', authMiddleware, task)
app.use(errorHandlerMiddleware)
app.use(notFound)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
