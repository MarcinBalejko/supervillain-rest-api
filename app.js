const express = require('express');
const app = express();
const mongoose = require('mongoose');



// Connect to DB
mongoose.connect()
// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/villains', (req, res) => {
    res.send('We are on the villains list');
});

app.listen(3000, () => console.log('Server Up and running'));
