const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, { useUnifiedTopology: true }, () =>
    console.log('connected to db!')
);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/villains', (req, res) => {
    res.send('We are on the villains list');
});

app.listen(3000, () => console.log('Server Up and running'));
