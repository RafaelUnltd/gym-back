const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv-safe').config()

// Middlewares
const isAuthenticated = require('./middlewares/is-authenticated')

// Services
const authService = require('./services/auth')

// Api Setup
const app = express()
const port = 9000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Auth routes
app.post('/login', authService.login)
app.get('/users', isAuthenticated, authService.listUsers)
app.post('/users', isAuthenticated, authService.registerUser)

// Connecting mongoose
mongoose
  .connect('mongodb://db:27017/crud-node-mongo-docker', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado')
  })
  .catch(error => {
    console.log(error)
  })

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
