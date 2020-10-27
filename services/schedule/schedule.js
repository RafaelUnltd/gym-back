const express = require('express');
const router = express.Router();

const Schedule = require('../../schemas/schedule')

router.get('/getById/:id', (req, res) => {    
    Schedule.findById(req.params.id).then(schedules => {
        res.json(schedules)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});

router.get('/getAll', (req, res) => {
    Schedule.find().then(schedules => {
      res.json(schedules)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.post('/insert', async (req, res) => {
    const newSchedule = new Schedule(req.body);  
    newSchedule.save().then(schedule => {
      res.json(schedule)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
})

router.put('/update', async (req, res) => {
    Schedule.updateOne({_id: req.body._id}, req.body).then(schedule => {
      res.json(schedule)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.delete('/delete/:id', async (req, res) => {
    Schedule.deleteOne({_id: req.params.id}).then(schedule => {
        res.json(schedule)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});


module.exports = router;