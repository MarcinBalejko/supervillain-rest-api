const express = require('express');

const router = express.Router();



// ROUTES

router.get('/', (req, res) => {
    res.send('We are on the villains list');
});

router.get('/specific', (req, res) => {
    res.send('Specific villain')
});

module.exports = router;