const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth20').Strategy;
const KEY = require('../config/key')
const mongoose = require('mongoose')
const User = mongoose.model('users')

passport.serializeUser((user,done)=>{
    // console.log(user._id.toString())
    done(null,user._id.toString())
})

passport.deserializeUser((id,done)=>{
   User.findById(id).then((user)=>{
    // console.log(user)   
    done(null,user)
   })
//    done(null,user)
})

passport.use(new GoogleStratergy({
    clientID: KEY.googleClientID,
    clientSecret: KEY.googleSecret,
    callbackURL: "http://localhost:4000/auth/google/callback",
    proxy:true,
    scope: ['profile', 'email']
},async (accessToken, refreshToken, { _json: json }, done) => {
    // console.log(profile)
    const existingUser = await User.findOne({
        id: json.sub
    })
    if (!existingUser) {
        const user = await new User({
            id: json.sub,
            name: json.name,
            mail: json.email,
            fname: json.given_name,
            lname: json.family_name
        }).save()
        done(null, user)
    }
    else {
        done(null,existingUser)
    }


}))