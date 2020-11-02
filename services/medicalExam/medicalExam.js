const express = require('express');
const router = express.Router();

const MedicalExam = require('../../schemas/medicalExam')
// Middlewares
const isAuthenticated = require('./middlewares/is-authenticated')

router.get('/getById/:id', isAuthenticated, (req, res) => {    
    MedicalExam.findById(req.params.id).then(medicalExams => {
        res.json(medicalExams)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});

router.get('/getAll', isAuthenticated, (req, res) => {
    MedicalExam.find().then(medicalExams => {
      res.json(medicalExams)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.get('/getByUser/:id', isAuthenticated, (req, res) => {
    MedicalExam.find({idUser: req.params.id}).then(medicalExams => {
      res.json(medicalExams)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.post('/insert', isAuthenticated, async (req, res) => {
    const newMedicalExam = new MedicalExam(req.body);  
    newMedicalExam.save().then(medicalexam => {
      res.json(medicalexam)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
})

router.put('/update', isAuthenticated, async (req, res) => {
    MedicalExam.updateOne({_id: req.body._id}, req.body).then(medicalexam => {
      res.json(medicalexam)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.delete('/delete/:id', isAuthenticated, async (req, res) => {
    MedicalExam.deleteOne({_id: req.params.id}).then(medicalexam => {
        res.json(medicalexam)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});


module.exports = router;