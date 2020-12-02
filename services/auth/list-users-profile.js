const User = require('../../schemas/user')

function listUsersProfile (req, res) {
  User.find({ profile: req.params.profile }).populate('exams').populate('trainings').then(users => {
    res.json(users)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
}

module.exports = listUsersProfile
