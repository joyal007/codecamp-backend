const mongoose = require('mongoose')
const Question = mongoose.model('Question')

 const Problem=(app)=>{
    app.get('/problemlist',async (req,res)=>{
      console.log(Question)
       const data = await Question.find({}).select("title difficulty id")
       console.log(data )
       res.send(data)

    })
}
module.exports = Problem;
