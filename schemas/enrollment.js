const mongoose = require('mongoose')

const { Schema } = mongoose

const EnrollmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  modality: {
    type: Schema.Types.ObjectId,
    ref: 'modality'
  },
  classes: [{
    type: Schema.Types.ObjectId,
    ref: 'schedule'
  }]
})

module.exports = mongoose.model('enrollment', EnrollmentSchema, 'enrollment')
