
const SubmitCode = (app)=>{
    app.get('/submit/:quesTitle',(req,res)=>{
        console.log(req.params.quesTitle)
        console.log(req.query.code)
        
    })
}

module.exports =  SubmitCode;