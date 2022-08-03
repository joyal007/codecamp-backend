const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    id:String,
    title:String,
    question:[],
    difficulty:String,
    example:[],
    constraint:[],
    testcase:{
        input:String,
        outpur:String
    },
    code:String
})

mongoose.model('Question',QuestionSchema,'questionDetail')
