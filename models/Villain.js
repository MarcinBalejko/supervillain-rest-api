const mongoose = require('mongoose');

const VillainSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    power: {
        type: String,
        required: true
    },
    universe: {
        type: String,
        required: true
    },
    enemy: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Villains', VillainSchema);