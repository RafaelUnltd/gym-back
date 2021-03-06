const mongoose = require('mongoose')
const { Schema } = mongoose

const UserPlanSchema = new Schema({
  planId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  isValid: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('userPlan', UserPlanSchema)
