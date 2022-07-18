const { request } = require('express')
const express = require('express')
const dotenv = require('dotenv').config()
const {json} = require('express')
const nodemail = require('./mails/mailer')
const {errorHandler} = require('./middleware/errorMiddleware')
const goals = require('./router/goalRoute')
const connectDB = require('./config/db')

connectDB()
nodemail()
const app = express()

app.use(json())

app.use(express.urlencoded({extended: false}))
app.use(errorHandler)
app.use('/goals',goals)

PORT = process.env.PORT || 5000

app.listen(PORT,() => console.log("Server is listening on port"))