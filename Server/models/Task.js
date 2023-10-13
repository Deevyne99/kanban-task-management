const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  boardName: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
  },
  columns: [
    {
      name: {
        type: String,
        required: [true, 'must provide column'],
        trim: true,
      },

      task: [
        {
          title: {
            type: String,
            required: [true, 'must provide title'],
            trim: true,
          },
          dscription: {
            type: String,
            required: [true, 'must provide title'],
            trim: true,
          },
          subtasks: [
            {
              title: {
                type: String,
                required: [true, 'must provide title'],
                trim: true,
              },
              isCompleted: {
                type: Boolean,
                default: false,
              },
            },
          ],
        },
      ],
    },
  ],
})

module.exports = mongoose.model('Tasks', TaskSchema)
