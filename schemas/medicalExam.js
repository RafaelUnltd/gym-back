const mongoose = require('mongoose')
const { Schema } = mongoose

const MedicalExamSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  bloodPressure: {
    type: Number,
    required: true
  },
  fatPercentage: {
    type: Number,
    required: true
  },
  massPercentage: {
    type: Number,
    required: true
  },
  imc: {
    type: Number,
    required: true
  },
  isAble: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('medicalExam', MedicalExamSchema, 'medicalExam')
