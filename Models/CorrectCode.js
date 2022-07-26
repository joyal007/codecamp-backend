const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const correctCodeSchema  = new Schema({
    id:String,
    submitCode:String,
    testCaseCode:String
})

mongoose.model('Code',correctCodeSchema,'CorrectCode')