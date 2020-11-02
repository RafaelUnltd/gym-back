const express = require('express');
const router = express.Router();

const Training = require('../../schemas/training')

// Middlewares
const isAuthenticated = require('./middlewares/is-authenticated')

router.get('/getById/:id', isAuthenticated, (req, res) => {    
    Training.findById(req.params.id).then(trainings => {
        res.json(trainings)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});


router.get('/getAll', isAuthenticated, (req, res) => {
    Training.find({idUser: req.UserId}).then(trainings => {
      res.json(trainings)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.post('/insert', isAuthenticated, async (req, res) => {
    const newTraining = new Training(req.body);  
    newTraining.save().then(training => {
      res.json(training)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
})

router.put('/update', isAuthenticated, async (req, res) => {
    Training.updateOne({_id: req.body._id}, req.body).then(training => {
      res.json(training)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.delete('/delete/:id', isAuthenticated, async (req, res) => {
    Training.deleteOne({_id: req.params.id}).then(training => {
        res.json(training)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});


module.exports = router;