const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());   // Anytime we hit any request the body-parser will run


// Import Routes
const villainsRoute = require('./routes/villains');

app.use('/villains', villainsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});


// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, { useUnifiedTopology: true }, () =>
    console.log('connected to db!')
);


app.listen(3000, () => console.log('Server Up and running'));
