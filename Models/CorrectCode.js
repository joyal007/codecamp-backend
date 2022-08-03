const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const correctCodeSchema  = new Schema({
    id:String,
    submitCode:String,
    correctCode:String,
    title:String,
})

mongoose.model('Code',correctCodeSchema,'correctcode')