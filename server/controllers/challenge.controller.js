const { challenge, Challenge} = require("../models/challenge.model")

module.exports.createChallenge = (req, res) =>{
    const {name,description} = req.body;
    Challenge.create({
        name,
        description
    })
        .then(challenge=> res.json(challenge))
        .catch(err=>res.json(err))
}

module.exports.showAllChallenges = (req, res) =>{
    Challenge.find({}).sort({"name":-1})
        .then(challenges=>res.json(challenges))
        .catch(err=>res.json(err))
}

module.exports.getChallenge = (req, res) => {
    Challenge.findOne({_id:req.params.id})
        .then(challenge=>res.json(challenge))
        .catch(err=>res.json(err))
}

module.exports.updateChallenge = (req, res) => {
    Challenge.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedChallenge=>res.json(updatedChallenge))
        .catch(err=>res.json(err))
}

module.exports.deleteChallenge = (req, res) => {
    Challenge.deleteOne({_id: req.params.id})
        .then(deleteConfirmation=>res.json(deleteConfirmation))
        .catch(err=>res.json(err))
}