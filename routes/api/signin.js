const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Item model
const SignIn = require('../../models/SignIn');

router.post('/', (req, res) => {
  SignIn.find({email: req.body.email})
  .exec()
  .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth failed'
        })
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed'
          })
        }
        if (result) {
          const token = jwt.sign({
            email: user[0].email,
            userId: user[0]._id
          }, process.env.JWT_KEY,
            {
              expiresIn: '1h'
            }
          )
          return res.status(200).json({
            message: 'Auth successful',
            token: token
          })
        }
        return res.status(401).json({
          message: 'Auth failed'
        })
      });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
});

module.exports = router;