require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var expressValidator = require('express-validator');

const items = require('./routes/api/items');
const signIn = require('./routes/api/signin');
const signUp = require('./routes/api/users');

app.use(expressValidator());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Bodyparser Middleware
app.use(bodyParser.json());
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true}).then(() => {
//     console.log('MongoDB Connected...')
// }).catch((err) => {
//     console.log('error mongoDB', err)
// });

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB Connected...')
});

// User Routes
app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Project Support',
    });
  });
app.use('/api/items', items);
app.use('/api/login', signIn);
app.use('/api/users', signUp);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))