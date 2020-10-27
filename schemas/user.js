const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  profile: {
    type: String,
    enum: ['client', 'secretary', 'professor', 'doctor'],
    default: 'client'
  },
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
  cpf: String,
  identity: String,
  dob: Date,
  creditCard: {
    cardNumber: {
      type: String,
      required: true
    },
    cardholderName: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    }
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('user', UserSchema)
