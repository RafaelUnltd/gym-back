const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv-safe').config()

// Middlewares
const isAuthenticated = require('./middlewares/is-authenticated')

// Services
const authService = require('./services/auth')
const planService = require('./services/plan')
const userPlanService = require('./services/userPlan')
const scheduleService = require('./services/schedule')
const userScheduleService = require('./services/userSchedule')
const trainingService = require('./services/training')
const medicalExamService = require('./services/medicalExam')


// Api Setup
const app = express()
const port = 9000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Auth routes
app.post('/login', authService.login)
app.post('/users', isAuthenticated, authService.registerUser)
app.get('/users/', isAuthenticated, authService.listUsers)
app.get('/users/:profile', isAuthenticated, authService.listUsersProfile)

// Plan routes
app.use('/plan', planService);

// User Plan routes
app.use('/user-plan', userPlanService);

// Schedule routes
app.use('/schedule', scheduleService);

// User Schedule routes
app.use('/user-schedule', userScheduleService);

// Training routes
app.use('/training', trainingService);

// Medical Exam routes
app.use('/medical-exam', medicalExamService);

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
