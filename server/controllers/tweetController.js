const Tweet = require('../models/Tweet')

class TweetController {
  static create(req, res) { }

  static findAll (req, res) {
    Tweet.find()
    .then(result => res.status(200).json({
      message: 'Success find all tweets',
      tweets: result
    }))
    .catch(err => res.status(500).send(err))
  }

  static findById (req, res) {
    Tweet.findById(req.params.id)
    .then(result => res.status(200).json({
      message: 'Success find all tweets',
      tweet: result
    }))
    .catch(err => res.status(500).send(err))
  }

  static findByHashtag(req, res) {
    Tweet.find({ hashtags: req.body.hashtags })
    .then(result => res.status(200).json({
      message: 'Success find tweets by hastags',
      tweet: result
    }))
    .catch(err => res.status(500).send(err))
  }

  static delete(req, res) {
    Tweet.findByIdAndRemove(req.params.id)
      .then(result => res.status(200).json({
        message: 'Success find all tweets',
        deletedTweet: result
      }))
      .catch(err => res.status(500).send(err))
  }
}

module.exports = TweetController