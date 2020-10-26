const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

// Item model
const User = require('../../models/user');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to User',
  });
});

router.post('/register', (req, res) => {
  User.find({email: req.body.email})
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'Mail exists',
        })
      } else {
        const name = req.body.name;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        
        req.checkBody('name', 'Name is required').notEmpty();
        req.checkBody('email', 'Email is required').notEmpty();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('username', 'Username is required').notEmpty();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('confirmpassword', 'Confirmpassword do not match').equals(password);
        let errors = req.validationErrors();
        if (errors) {
          return res.status(400).json(errors);
        } else {
          let newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            email: email,
            username: username,
            password: password
          })

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                return res.status(500).json({
                  error: err
                })
              } else {
                newUser.password = hash;
                newUser
                  .save()
                  .then(result => {
                    res.status(201).json({success: true, message: 'User created'})
                  })
                  .catch(err => {
                    res.status(500).json({
                      error: err
                    })
                  })
                  // if (err) {
                  //   return res.status(500).json({
                  //     error: err
                  //   })
                  // } else {
                  //   return res.status(201).json({success: true, message: 'User created'})
                  // }
              }
            });
          })
        }
      }
    })
    .catch();
})

module.exports = router;