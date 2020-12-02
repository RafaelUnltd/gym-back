const mongoose = require('mongoose')
const { Schema } = mongoose

const ScheduleSchema = new Schema({
  dayOfWeek: {
    type: String,
    enum: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    required: true
  },
  maxClients: {
    type: Number,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  enrolledClients: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('schedule', ScheduleSchema, 'schedule')
