const mongoose = require('mongoose')
const Schema = require('mongoose').Schema;

const userSchema =new Schema({
    name:String,
    id:String,
    mail:String,
    fname:String,
    lname:String
})

mongoose.model("users",userSchema)