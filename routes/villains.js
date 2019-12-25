const express = require('express');

const router = express.Router();



// ROUTES

router.get('/', (req, res) => {
    res.send('We are on the villains list');
});

module.exports = router;