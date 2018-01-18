const Tweet = require('../models/Tweet')

class TweetController {
  static create(req, res) {
    if (req.body.content.length > 139) {
      let newTweet = new Tweet({
        user: req.decoded._id,
        content: req.body.content,
        hashtags: req.body.hashtags
      })
      newTweet.save()
      .then(result => res.status(200).json({
        message: 'Success create tweet',
        newTweet: result
      }))
      .catch(err => res.status(500).send(err))
    } else {
      res.status(204).send('Kurang panjang bro')
    }
  }

  static findAll (req, res) {
    Tweet.find()
    .populate(['user'])
    .then(result => res.status(200).json({
      message: 'Success find all tweets',
      tweets: result
    }))
    .catch(err => res.status(500).send(err))
  } 

  static findByUserId(req, res) {
    console.log('masuk?', req.decoded)
    Tweet.find({ user: req.decoded._id })
    .populate(['user'])
    .then(result => res.status(200).json({
      message: 'Success find user tweets',
      userTweets: result
    }))
    .catch(err => res.status(500).send(err))
  }

  static findById (req, res) {
    Tweet.findById(req.params.id)
    .populate(['user'])
    .then(result => res.status(200).json({
      message: 'Success find tweet',
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
    Tweet.findById(req.params.id)
      .then(tweet => {
        if (tweet.user != req.decoded._id) {
          res.status(403).send('Forbidden')
        } else {
          Tweet.findByIdAndRemove(req.params.id)
            .then(result => res.status(200).json({
              message: 'Success find all tweets',
              deletedTweet: result
            }))
            .catch(err => res.status(500).send(err))
        }
      })
      .catch(err => res.status(500).send(err))
  }
}

module.exports = TweetController