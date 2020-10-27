const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const { Schema } = mongoose

const ScheduleSchema = new Schema({
  idUser: Schema.Types.ObjectId,
  exercises: {
    type: [{
        name: {type: String},
        muscle: {type: String},
        repetitions: {type: Number}
    }],
    required: true
  }
}, {
    timestamps: true
  })

module.exports = mongoose.model('training', ScheduleSchema)
