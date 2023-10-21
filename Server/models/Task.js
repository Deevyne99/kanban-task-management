const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
  {
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
              // required: [true, 'must provide title'],
              trim: true,
            },
            dscription: {
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
