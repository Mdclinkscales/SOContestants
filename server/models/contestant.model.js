const mongoose = require('mongoose');

const ContestantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Surely this contestant has a name"],
        unique: [true, "Sorry need a new name to be housed here"],
        minlength: [3, "Gotta have a longer name than 3 characters, make some up!"],
    },
    seasons: {
        type: [String],
        required: [true, "Can't be a player without a season"],
    },
    description: {
        type: String,
        required: [true, "What's the deal with this animal?"],
        minlength: [3, "Give more detail"]
    },
    immunities: {
        type: Number,
        required: [true, "How many did they win?"]
    }
}, {timestamps: true}, {runValidators: true});

module.exports.Contestant = mongoose.model('Contestant', ContestantSchema)