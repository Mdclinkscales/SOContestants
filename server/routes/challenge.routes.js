const ChallengeController = require('../controllers/challenge.controller')

module.exports = (app)=>{
    app.get('/api', ChallengeController.index);
    app.post('/api/challenges', ChallengeController.createChallenge)
    app.get('/api/challenges', ChallengeController.showAllChallenges)
    app.get('/api/challenges/:id', ChallengeController.getChallenge)
    app.put('/api/challenges/:id', ChallengeController.updateChallenge)
    app.delete('/api/challenges/:id', ChallengeController.deleteChallenge)
}