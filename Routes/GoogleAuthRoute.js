const passport = require('passport')
require('../Services/googlePassport')


module.exports = (app) => {

    app.get('/auth/google', passport.authenticate("google"))

    app.get('/auth/google/callback', 
    passport.authenticate("google", 
    { failureRedirect: '/login', failureMessage: true }), 
    (req, res) => 
    {
        res.redirect('/')
    })
}


