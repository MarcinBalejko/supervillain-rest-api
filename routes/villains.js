const express = require('express');
const router = express.Router();
const Villain = require('../models/Villain');



// ROUTES

router.get('/', (req, res) => {
    res.send('We are on the villains');
});

router.get('/specific', (req, res) => {
    res.send('Specific villain')
});

router.post('/', (req, res) => {
    console.log(req.body);
});


module.exports = router;