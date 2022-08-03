const express = require('express')
const path = require('path')
module.exports =(app,public)=>{
    app.get('/login',(req,res)=>{
        res.sendFile(path.join(public,'login.html'))
        
    })
}