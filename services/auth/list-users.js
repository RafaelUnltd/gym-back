const User = require('../../schemas/user')

function listUsers (req, res) {
  User.find().then(users => {
    res.json(users)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
}

module.exports = listUsers