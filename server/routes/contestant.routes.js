const ContestantController = require('../controllers/contestant.controller')
module.exports = (app)=>{
    app.get('/api', ContestantController.index);
    app.post('/api/contestants', ContestantController.createContestant)
    app.get('/api/contestants', ContestantController.showAllContestants)
    app.get('/api/contestants/:id', ContestantController.getContestant)
    app.put('/api/contestants/:id', ContestantController.updateContestant)
    app.delete('/api/contestants/:id', ContestantController.deleteContestant)
}