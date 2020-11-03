const express = require('express');
const router = express.Router();

const UserSchedule = require('../../schemas/userSchedule')

router.get('/getById/:id', (req, res) => {    
  UserSchedule.findById(req.params.id).then(userSchedules => {
    res.json(userSchedules)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
});

router.get('/getByUserId/:userId', (req, res) => {
  UserSchedule
    .find({userId: req.params.userId})
    .populate('scheduleId')
    .then(userSchedules => {
      res.json(userSchedules);
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.get('/getByScheduleId/:scheduleId', (req, res) => {
  UserSchedule
    .find({scheduleId: req.params.scheduleId})
    .populate('userId')
    .then(userSchedules => {
      res.json(userSchedules);
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.post('/insert', (req, res) => {
  const newUserSchedule = new UserSchedule(req.body);  
  newUserSchedule.save().then(userSchedule => {
    res.json(userSchedule)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
})

router.delete('/delete/:id', (req, res) => {
  UserSchedule.deleteOne({_id: req.params.id}).then(plan => {
    res.json(plan)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
});

module.exports = router;