const jwt = require('jsonwebtoken')
const User = require('../../schemas/user')

function login (req, res) {
  const loginData = {
    username: req.body.username,
    password: req.body.password
  }

  User.findOne({ username: loginData.username }).then(user => {
    if (user && user.password === loginData.password) {
      const token = jwt.sign({
        ...user,
        password: undefined
      }, process.env.SECRET, {
        expiresIn: 259200 // expires in 3 dayss
      })
      res.status(200).json({ token })
    } else {
      res.status(401).json({ message: 'Invalid username and/or password' })
    }
  }).catch(err => {
    res.status(500).json(err)
  })
}

module.exports = login
