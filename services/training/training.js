const express = require('express');
const router = express.Router();

const Training = require('../../schemas/training')

router.get('/getById/:id', (req, res) => {    
    Training.findById(req.params.id).then(trainings => {
        res.json(trainings)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});


router.get('/getAll', (req, res) => {
    Training.find({idUser: req.UserId}).then(trainings => {
      res.json(trainings)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.post('/insert', async (req, res) => {
    const newTraining = new Training(req.body);  
    newTraining.save().then(training => {
      res.json(training)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
})

router.put('/update', async (req, res) => {
    Training.updateOne({_id: req.body._id}, req.body).then(training => {
      res.json(training)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.delete('/delete/:id', async (req, res) => {
    Training.deleteOne({_id: req.params.id}).then(training => {
        res.json(training)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});


module.exports = router;