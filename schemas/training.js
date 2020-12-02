const mongoose = require('mongoose')
const { Schema } = mongoose

const TrainingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  exercises: {
    type: [{
      name: { type: String },
      muscle: { type: String },
      repetitions: { type: Number }
    }],
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('training', TrainingSchema, 'training')
