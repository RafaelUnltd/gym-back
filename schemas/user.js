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
  exams: [{
    type: Schema.Types.ObjectId,
    ref: 'medicalExam'
  }],
  creditCard: {
    cardNumber: {
      type: String
    },
    cardholderName: {
      type: String
    },
    brand: {
      type: String
    }
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('user', UserSchema, 'user')
