const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
  {
    boardName: {
      type: String,
      required: [true, 'please provide board name'],
      trim: true,
    },
    columns: [
      {
        name: {
          type: String,
          required: [true, 'must provide column'],
          trim: true,
        },

        tasks: [
          {
            title: {
              type: String,
              // required: [true, 'must provide title'],
              trim: true,
            },
            description: {
              type: String,
              // required: [true, 'must provide title'],
              trim: true,
            },
            subtasks: [
              {
                title: {
                  type: String,
                  // required: [true, 'must provide title'],
                  trim: true,
                },
                isCompleted: {
                  type: Boolean,
                  default: false,
                },
              },
            ],
            status: {
              type: String,
              required: [true, 'please enter a status'],
            },
          },
        ],
      },
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'please provide user'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Board', TaskSchema)
