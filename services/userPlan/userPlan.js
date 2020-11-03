const express = require('express');
const router = express.Router();

const UserPlan = require('../../schemas/userPlan')

router.get('/getById/:id', (req, res) => {    
  UserPlan.findById(req.params.id).then(userPlans => {
    res.json(userPlans)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
});

router.get('/getByUserId/:userId', (req, res) => {
  UserPlan
    .find({userId: req.params.userId})
    .populate('planId')
    .then(userPlans => {
      res.json(userPlans);
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.get('/getByPlanId/:planId', (req, res) => {
  UserPlan
    .find({planId: req.params.planId})
    .populate('planId')
    .then(userPlans => {
      res.json(userPlans);
    }).catch(err => {
      console.error(err)
      res.status(500).json(err)
    })
});

router.post('/insert', (req, res) => {
  const newUserPlan = new UserPlan(req.body);  
  newUserPlan.save().then(userPlan => {
    res.json(userPlan)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
})

router.delete('/delete/:id', (req, res) => {
  UserPlan.deleteOne({_id: req.params.id}).then(plan => {
    res.json(plan)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
});


module.exports = router;