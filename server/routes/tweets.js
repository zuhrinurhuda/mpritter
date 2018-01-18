const router = require('express').Router()
const tweetController = require('../controllers/tweetController')

router.post('/', tweetController.create)
router.get('/', tweetController.findAll)
router.get('/', tweetController.findByHashtag)
router.delete('/', tweetController.delete)

module.exports = router
