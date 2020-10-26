const mongoose = require('mongoose');

// Create Schema
const SignInSchema = new mongoose.Schema({
    email: {type: String, required: true,},
    password: {type: String, required: true,}
});

module.exports = SignIn = mongoose.model('users', SignInSchema);