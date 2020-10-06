const jwt = require('jsonwebtoken')

function isAuthenticated (req, res, next) {
  var token = req.headers['x-access-token']
  if (!token) return res.status(401).json({ message: 'No token provided.' })

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) return res.status(500).json({ message: 'Failed to authenticate token.' })

    req.userId = decoded.id
    next()
  })
}

module.exports = isAuthenticated
