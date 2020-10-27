const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const { Schema } = mongoose

const ScheduleSchema = new Schema({
  modality: {
    type: String,
    enum: ['Natação', 'Musculação', 'Spinning', 'crossfit', 'Ritmos'],
    required: true
  },
  maxClient: {
    type: Number,
    required: true
  },
  startTime: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  dayOfWeek: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('schedule', ScheduleSchema)
