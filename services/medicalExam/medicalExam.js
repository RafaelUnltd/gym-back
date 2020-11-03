const express = require('express')
const router = express.Router()

const MedicalExam = require('../../schemas/medicalExam')
const User = require('../../schemas/user')

// Middlewares
const isAuthenticated = require('../../middlewares/is-authenticated')

router.get('/getById/:id', (req, res) => {
  MedicalExam.findById(req.params.id).then(medicalExams => {
    res.json(medicalExams)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
})

router.get('/getAll', (req, res) => {
  MedicalExam.find().populate('user').then(medicalExams => {
    res.json(medicalExams)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
})

router.get('/getByUser/:id', (req, res) => {
  MedicalExam.find({ idUser: req.params.id }).then(medicalExams => {
    res.json(medicalExams)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
})

router.post('/insert', (req, res) => {
  const newMedicalExam = new MedicalExam(req.body)
  newMedicalExam.save().then(medicalExam => {
    User.findById(req.body.user, (_, user) => {
      if (user) {
        user.exams.push(medicalExam)
        user.save()
      }
      res.json(medicalExam)
    })
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
})

router.put('/update', (req, res) => {
  MedicalExam.updateOne({ _id: req.body._id }, req.body).then(medicalexam => {
    res.json(medicalexam)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
})

router.delete('/delete/:id', (req, res) => {
  MedicalExam.deleteOne({ _id: req.params.id }).then(medicalexam => {
    res.json(medicalexam)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
})

module.exports = router
