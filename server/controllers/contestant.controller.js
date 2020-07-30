const { contestant, Contestant} = require("../models/contestant.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createContestant = (req, res) =>{
    const {name,seasons,description,immunities} = req.body;
    Contestant.create({
        name,
        seasons,
        description,
        immunities
    })
        .then(contestant=> res.json(contestant))
        .catch(err=>res.json(err))
}

module.exports.showAllContestants = (req, res) =>{
    Contestant.find({}).sort({"seasons":1})
        .then(contestants=>res.json(contestants))
        .catch(err=>res.json(err))
}

module.exports.getContestant = (req, res) => {
    Contestant.findOne({_id:req.params.id})
        .then(contestant=>res.json(contestant))
        .catch(err=>res.json(err))
}

module.exports.updateContestant = (req, res) => {
    Contestant.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedContestant=>res.json(updatedContestant))
        .catch(err=>res.json(err))
}

module.exports.deleteContestant = (req, res) => {
    Contestant.deleteOne({_id: req.params.id})
        .then(deleteConfirmation=>res.json(deleteConfirmation))
        .catch(err=>res.json(err))
}