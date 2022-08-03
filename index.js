const express = require('express');
const passport = require("passport");
const mongoose = require('mongoose')
const KEY = require('./config/key')
mongoose.connect(KEY.monogoConnet)

const path = require('path')
const public = path.join(__dirname,'public')
//Models
require('./Models/user')
require('./Models/QuestionDetail')
require('./Models/CorrectCode')

const googleRoute = require('./Routes/GoogleAuthRoute')
// import  Problem  from './Routes/Problem'

// const login = require('./Routes/Login')
const Problem = require('./Routes/ProblemList')
const RunCode = require('./Routes/RunCode')
const QuestionDetails = require('./Routes/QuestionDetails')
const cookieSession = require('cookie-session');
const SubmitCode = require('./Routes/SubmitCode');
const Login = require('./Routes/Login');
const Discussion = require('./Routes/Discussion');
const PORT = process.env.PORTPORT || 4000


const app = express()

app.use(cookieSession({
    name:'sesssion',
    keys:[KEY.cookies],
    maxAge:24*60*60*1000
}))

app.use(passport.initialize())
app.use(passport.session())


googleRoute(app)
app.get('/api', (req, res) => {
    res.send('Hiii')

})
app.get('/user',(req,res)=>{
    res.send(req.user)
})
RunCode(app);
Problem(app);
QuestionDetails(app);
SubmitCode(app)
Login(app,public)
Discussion(app)

app.use('/',express.static(path.join(public)))
app.listen(PORT, () => {
    console.log("server started")
})