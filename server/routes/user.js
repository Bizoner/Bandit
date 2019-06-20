var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cloudinary = require('../controllers/cloudinary')
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'pass',
    }, user_controller.authenticateUser
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

function isAuthenticated(req,res,next) {
    if (req.isAuthenticated()) next();
    else return res.status(401).json({message: 'Invalid Request'});
}


router.get('/logout',(req,res) => {req.logout(); res.redirect('/')});
router.get('/getUserData',isAuthenticated, user_controller.getUserData);
router.post('/register',
    cloudinary.uploadBase64Cloudinary,
    user_controller.addNewUser,
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.json(req.body.user);
    });

router.post('/login', passport.authenticate('local'),user_controller.getUserData);

module.exports = router;