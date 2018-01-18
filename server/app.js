require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.Promise = require('bluebird')
mongoose.connect(`mongodb://zuhri:${process.env.MONGO_ATLAS_PASSWORD}@cluster0-shard-00-00-67zih.mongodb.net:27017,cluster0-shard-00-01-67zih.mongodb.net:27017,cluster0-shard-00-02-67zih.mongodb.net:27017/mpritter?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`).catch(err => console.log(err))

const index = require('./routes/index')
const users = require('./routes/users')
const tweets = require('./routes/tweets')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/', index)
app.use('/api/users', users)
app.use('/api/tweets', tweets)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
