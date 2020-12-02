const User = require('../../schemas/user')

function listUsers (req, res) {
  User.find().populate('exams').populate('trainings').then(users => {
    res.json(users)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
}

module.exports = listUsers
