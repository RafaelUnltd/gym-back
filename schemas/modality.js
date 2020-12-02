const mongoose = require('mongoose')
const { Schema } = mongoose

const ModalitySchema = new Schema({
  name: {
    type: String,
    enum: ['Natação', 'Musculação', 'Spinning', 'Crossfit', 'Ritmos'],
    required: true
  },
  dayOptions: {
    type: [Number],
    required: true
  },
  monthlyValues: {
    type: Object,
    required: false
  },
  semiannualValues: {
    type: Object,
    required: false
  },
  yearlyValues: {
    type: Object,
    required: false
  },
  classes: [{
    type: Schema.Types.ObjectId,
    ref: 'schedule'
  }]
})

module.exports = mongoose.model('modality', ModalitySchema, 'modality')
