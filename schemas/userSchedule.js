const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const { Schema } = mongoose

const UserScheduleSchema = new Schema({
  scheduleId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  }
})

module.exports = mongoose.model('userSchedule', UserScheduleSchema)
