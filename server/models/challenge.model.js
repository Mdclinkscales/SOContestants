const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "What's it called?"]
    },
    description:{
        type: String,
        required: [true, "Describe the challenge"]
    }

}, {runValidators: true});
module.exports.Challenge = mongoose.model('Challenge', ChallengeSchema)