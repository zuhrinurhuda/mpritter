const router = require('express').Router()
const userController = require('../controllers/userController')
const checkAuth = require('../middleware/checkAuth')

router.post('/', userController.signupOrLogin)
router.get('/', userController.findAll)
router.get('/profile', checkAuth.isLogin, userController.findById)
router.put('/', userController.update)
router.delete('/', userController.delete)

module.exports = router
