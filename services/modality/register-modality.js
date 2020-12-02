const Modality = require('../../schemas/modality')
const Schedule = require('../../schemas/schedule')

function registerModality (req, res) {
  const newModality = new Modality({
    ...req.body,
    classes: undefined
  })

  const classes = req.body.classes
  const schedules = []

  if (classes) {
    classes.forEach(cl => {
      const newSchedule = new Schedule(cl)
      schedules.push(newSchedule._id)
      newSchedule.save()
    })

    newModality.classes = schedules
  }

  newModality.save().then(modality => {
    res.json(modality)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
}

module.exports = registerModality
