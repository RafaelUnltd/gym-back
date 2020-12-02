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
const userScheduleService = require('./services/userSchedule')
const trainingService = require('./services/training')
const medicalExamService = require('./services/medicalExam')
const modalityService = require('./services/modality')

// Api Setup
const app = express()
const port = 9000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Auth routes
app.post('/login', authService.login)
app.post('/users', authService.registerUser)
app.get('/users/', authService.listUsers)
app.get('/users/:id', authService.getUser)
app.get('/users/profile/:profile', authService.listUsersProfile)
app.put('/users/enroll/:id', authService.enrollUser)

// Modalities routes
app.get('/modalities', modalityService.listModalities)
app.post('/modalities', modalityService.registerModality)

// Plan routes
app.use('/plan', planService);

// User Plan routes
app.use('/user-plan', userPlanService);

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
