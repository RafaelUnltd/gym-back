const mongoose = require('mongoose')
const { Schema } = mongoose

const PlanSchema = new Schema({
  modality: {
    type: String,
    enum: ['Natação', 'Musculação', 'Spinning', 'crossfit', 'Ritmos'],
    required: true
  },
  days: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  typePayment: {
    type: String,
    enum: ['Mensal', 'Semestral', 'Anual'],
    required: true
  }
})

module.exports = mongoose.model('plan', PlanSchema)
