const User = require('../../schemas/user')
const Enrollment = require('../../schemas/enrollment')
const Schedule = require('../../schemas/schedule')

function enrollUser (req, res) {
  const creditCard = req.body.userId
  const modality = req.body.modality
  const classes = req.body.classes

  const enrollment = new Enrollment({ user: req.params.id, modality, classes })
  enrollment.save().catch(e => console.error(e))

  User.findByIdAndUpdate(req.params.id, { $set: { creditCard }, $push: { enrollments: enrollment._id } }).then(user => {
    classes.forEach(schedule => {
      Schedule.findById(schedule).then(sch => {
        sch.enrolledClients = sch.enrolledClients + 1
        sch.save()
      })
    })
    res.status(204).json()
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
}

module.exports = enrollUser
