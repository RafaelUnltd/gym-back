const User = require('../../schemas/user')

function requestInvitation (req, res) {
  const newUser = new User(req.body)

  newUser.save().then(user => {
    res.json(user)
  }).catch(err => {
    console.error(err)
    res.status(500).json(err)
  })
}

module.exports = requestInvitation
