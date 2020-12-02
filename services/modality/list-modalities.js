const Modality = require('../../schemas/modality')

function listModalities (req, res) {
  Modality.find().populate('classes').then(modalities => {
    res.json(modalities)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
}

module.exports = listModalities
