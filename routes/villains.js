const express = require('express');
const router = express.Router();
const Villain = require('../models/Villain');


// ROUTES

router.get('/', async (req, res) => {
    try {
        const villains = await Villain.find();
        res.json(villains);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const villain = new Villain({
        name: req.body.name,
        description: req.body.description,
        power: req.body.power,
        universe: req.body.universe,
        enemy: req.body.enemy,
        picture: req.body.picture
    });
    try {
        const savedVillain = await villain.save();
        res.json(savedVillain);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;