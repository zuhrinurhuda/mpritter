const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  content: String,
  hashtags: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('tweets', tweetSchema)
