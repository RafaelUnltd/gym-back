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
  }
})

module.exports = mongoose.model('userPlan', UserPlanSchema)
