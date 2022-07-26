const express = require('express');
const passport = require("passport");
const mongoose = require('mongoose')
const KEY = require('./config/key')
mongoose.connect(KEY.monogoConnet)
require('./Models/user')
require('./Models/QuestionDetail')
const googleRoute = require('./Routes/GoogleAuthRoute')
// import  Problem  from './Routes/Problem'
const Problem = require('./Routes/ProblemList')
const QuestionDetails = require('./Routes/QuestionDetails')
const cookieSession = require('cookie-session');
const SubmitCode = require('./Routes/SubmitCode');
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

Problem(app);
QuestionDetails(app);
SubmitCode(app)

app.listen(PORT, () => {
    console.log("server started")
})