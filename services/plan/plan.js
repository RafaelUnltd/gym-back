const express = require('express');
const router = express.Router();

const Plan = require('../../schemas/plan')

router.get('/getById/:id', (req, res) => {    
    Plan.findById(req.params.id).then(plans => {
        res.json(plans)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});

router.get('/getAll', (req, res) => {
    Plan.find().then(plans => {
      res.json(plans)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.post('/insert', (req, res) => {
    const newPlan = new Plan(req.body);  
    newPlan.save().then(plan => {
      res.json(plan)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
})

router.put('/update', (req, res) => {
    Plan.updateOne({_id: req.body._id}, req.body).then(plan => {
      res.json(plan)
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.delete('/delete/:id', (req, res) => {
    Plan.deleteOne({_id: req.params.id}).then(plan => {
        res.json(plan)
    }).catch(err => {
        console.error(err)
        res.status(500).json(err)
    })
});


module.exports = router;