require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB Connected...')
}).catch((err) => {
    console.log('error mongoDB', err)
});

// User Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))