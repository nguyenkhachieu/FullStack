const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  _id: new mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
})

const User = module.exports = mongoose.model('User', UserSchema);