const mongoose = require('mongoose')
const Question = mongoose.model('Question')

module.exports = (app) => {
    app.post('/disussion/:title', async (req, res) => {
        const data = await Question.findOne({ title: req.params.title }).select('discussion')

        console.log(req.params.title)
        console.log(data)
        res.send(data)
    })
    app.get('/discussion/add/:title', async (req, res) => {
        console.log(req.query)
        const data = await Question.findOne({ title: req.params.title }).select('discussion')
        const datasend = data.discussion
        console.log(data)
        
            Question.findOneAndUpdate({ title: req.params.title }, { discussion: [...datasend, req.query] },null,(err,doc)=>{
                
            if (err){
                console.log(err)
            }
            else{
                console.log("Original Doc : ",doc);
            }
        })
    })
}