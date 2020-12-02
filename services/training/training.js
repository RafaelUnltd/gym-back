const express = require('express');
const router = express.Router();

const Training = require('../../schemas/training')
const User = require('../../schemas/user')

// Middlewares
const isAuthenticated = require('../../middlewares/is-authenticated')

router.get('/getById/:id', isAuthenticated, (req, res) => {    
    Training.findById(req.params.id).then(trainings => {
        res.json(trainings)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});

router.get('/getAll', (req, res) => {
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

router.post('/insert', (req, res) => {
  const newTraining = new Training(req.body)
  newTraining.save().then(training => {
    User.findById(req.body.user, (_, user) => {
      if (user) {
        user.trainings.push(training)
        user.save()
      }
      res.json(training)
    })
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