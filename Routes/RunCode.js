const mongoose = require('mongoose');
const Code = mongoose.model('Code');
const fs = require('fs')
const {spawn}=require('child_process')

const RunCode = (app)=>{
    app.get('/runcode',async (req,res)=>{
        console.log('runcode postrequest')
        console.log(req.query.title,req.query.testcase)
        const response = await Code.findOne({title:req.query.title}).select('correctCode');
        console.log(response)

        const correctSolution  = fs.createWriteStream('CorrectSolution.py');
        correctSolution.write(response.correctCode)
        correctSolution.end()

        const userCode = fs.createWriteStream('TestSolution.py');
        userCode.write(req.query.code);
        userCode.end();

        const python = spawn('python3',['CorrectSolution.py',req.query.testcase]);
        let result
        python.stdout.on('data', function (data) {
            result=data.toString();
            console.log(result)
           });

        python.stderr.on('data',(data)=>{
            console.log("error =>"+data)
            result=data
        })
        
        python.on('close',(code)=>{
            if (code=== 1){
                res.status(500).send(result)
            }
            else{
                const output=result.split("\n")
                res.status(200).send(output)
            }
        })
    })
}

module.exports= RunCode;