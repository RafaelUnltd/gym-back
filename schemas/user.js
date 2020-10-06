const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    enum: ['client', 'employee'],
    default: 'client'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('user', UserSchema)
