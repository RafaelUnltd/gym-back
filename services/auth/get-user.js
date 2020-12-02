const User = require('../../schemas/user')

function getUser (req, res) {
  User.findById(req.params.id).populate('exams').populate('trainings').populate('enrollments').then(user => {
    res.json(user)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
}

module.exports = getUser
