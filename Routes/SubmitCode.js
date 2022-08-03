const mongoose = require('mongoose')
const Code = mongoose.model('Code')
const {spawn} = require('child_process')

const fs = require('fs')
const SubmitCode = (app)=>{
    app.get('/submit/:quesTitle',async (req,res)=>{
        const data =await  Code.findOne({title:req.params.quesTitle}).select('submitCode')
        console.log(data)


        const write = fs.createWriteStream('Solution.py')
        write.write(req.query.code)
        write.end()

        const writeMain = fs.createWriteStream('main.py')
        writeMain.write(data.submitCode)
        writeMain.end()

        let result;
        
        const python = spawn('python3',['main.py'])

        python.stdout.on('data', function (data) {
            result=data.toString();
            console.log(result)
           });

        python.stderr.on('data',(data)=>{
            console.log("error =>"+data)
            result=data.toString()
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

module.exports =  SubmitCode;