const express = require('express');
const router = express.Router();

const Training = require('../../schemas/training')

// Middlewares
const isAuthenticated = require('../../middlewares/is-authenticated')
const isAbleTraining = require('../../middlewares/is-able-training')

router.get('/getById/:id', isAuthenticated, (req, res) => {    
    Training.findById(req.params.id).then(trainings => {
        res.json(trainings)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});

router.get('/getAll', isAuthenticated, (req, res) => {
  Training.find().then(trainings => {
    res.json(trainings)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
});

router.get('/getByUserId', isAuthenticated, (req, res) => {
    Training.find({userId: req.params.userId}).then(trainings => {
      res.json(trainings)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.post('/insert', isAbleTraining, (req, res) => {
    const newTraining = new Training(req.body);  
    newTraining.save().then(training => {
      res.json(training)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
})

router.put('/update', isAuthenticated, (req, res) => {
    Training.updateOne({_id: req.body._id}, req.body).then(training => {
      res.json(training)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.delete('/delete/:id', isAuthenticated, (req, res) => {
    Training.deleteOne({_id: req.params.id}).then(training => {
        res.json(training)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});


module.exports = router;