const mongoose = require('mongoose')
const Question = mongoose.model('Question')

 const Problem=(app)=>{
    app.get('/problemlist',async (req,res)=>{
       const data = await Question.find({}).select("title difficulty id")
       res.send(data)

    })
}
module.exports = Problem;
