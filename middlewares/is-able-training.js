const jwt = require('jsonwebtoken')

const MedicalExamSchema = require('../schemas/medicalExam')

function isAbleTraining (req, res, next) {
  MedicalExamSchema.find({userId: req.params.userId}).then(medicalExams => {
    let recentMedicalExam = medicalExams.reduce((a, b) => {
      return a.createdAt > b.createdAt ? a : b;
    });
    if(recentMedicalExam && recentMedicalExam.isAble) next()
    else res.status(401).json({ message: 'Client not able to train.' })
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
}

module.exports = isAbleTraining
