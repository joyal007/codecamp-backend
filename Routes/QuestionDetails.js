const mongoose = require('mongoose');
const Question = mongoose.model('Question')


const QuestionDetails=(app)=>{
    app.post('/problemlist/:quesTitle',async (req,res)=>{
        // console.log(req.params.quesTitle)
        const data = await Question.findOne({title:req.params.quesTitle})
        res.send(data)
    })
}
module.exports = QuestionDetails;