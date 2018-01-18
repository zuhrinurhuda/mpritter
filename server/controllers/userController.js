const User = require('../models/User')
const generateJwtToken = require('../helpers/generateJwtToken')

class UserController {
  static signupOrLogin (req, res) {
    console.log('ini req.body', req.body)
    User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // jika user sudah ada
        generateJwtToken(user)
        .then(jwtToken => res.status(200).json({
          message: 'Login success!',
          accesstoken: jwtToken,
          user: user
        }))
        .catch(err => res.status(500).send(err))
      } else {
        // jika user belum ada
        let newUser = new User({
          name: req.body.name,
          email: req.body.email,
          photo: req.body.photo
        })

        newUser.save()
        .then(newUser => {
          generateJwtToken(newUser)
          .then(jwtToken => res.status(200).json({
            message: 'Login success!',
            accesstoken: jwtToken,
            user: newUser
          }))
          .catch(err => res.status(500).send(err))
        })
        .catch(err => res.status(500).send(err))
      }
    })
    .catch(err => res.status(500).send(err))
  }

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