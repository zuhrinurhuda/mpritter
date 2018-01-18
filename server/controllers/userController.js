const User = require('../models/User')

class UserController {
  static signupOrLogin (req, res) {}

  static findAll(req, res) {
    User.find()
    .then(result => res.status(200).json({
      message: 'Success find all users',
      users: result
    }))
    .catch(err => res.status(500).send(err))
  }

  static findById(req, res) {
    User.findById(req.params.id)
    .then(result => res.status(200).json({
      message: 'Success find all users',
      user: result
    }))
    .catch(err => res.status(500).send(err))
  }

  static update(req, res) {
    User.findById(req.params.id)
    .then(user => {
      user.name = req.body.user || user.name
      user.photo = req.body.photo || user.photo
      user.save()
      .then(result => res.status(200).json({
        message: 'Success update user data',
        updatedUser: result
      }))
      .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
  }

  static delete(req, res) {
    User.findByIdAndRemove(req.params.id)
    .then(result => res.status(200).json({
      message: 'Success find all users',
      deletedUser: result
    }))
    .catch(err => res.status(500).send(err))
  }
}

module.exports = UserController