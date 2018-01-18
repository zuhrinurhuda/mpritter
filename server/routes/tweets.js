const router = require('express').Router()
const tweetController = require('../controllers/tweetController')
const checkAuth = require('../middleware/checkAuth')

router.post('/', checkAuth.isLogin, tweetController.create)
router.get('/user', checkAuth.isLogin, tweetController.findByUserId)
router.get('/:id', checkAuth.isLogin, tweetController.findById)
router.get('/', tweetController.findAll)
router.get('/', tweetController.findByHashtag)
router.delete('/:id', checkAuth.isLogin, tweetController.delete)

module.exports = router
