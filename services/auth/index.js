const registerUser = require('./register-user')
const listUsersProfile = require('./list-users-profile')
const listUsers = require('./list-users')
const getUser = require('./get-user')
const login = require('./login')
const enrollUser = require('./enroll-user')

module.exports = {
  registerUser,
  listUsersProfile,
  listUsers,
  login,
  getUser,
  enrollUser
}
