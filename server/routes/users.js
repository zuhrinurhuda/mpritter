const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/', userController.signupOrLogin)
router.get('/', userController.findAll)
router.get('/', userController.findById)
router.put('/', userController.update)
router.delete('/', userController.delete)

module.exports = router
