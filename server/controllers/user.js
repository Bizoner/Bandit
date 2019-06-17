var UsersModel = require('../models/users').UsersModel;
var BandsModel = require('../models/bands').BandsModel;

function getUserData (req,res,next) {
    if (!req.user._id) return next('missingid');
    UsersModel.getUserById(req.user._id,(err,user) => {
        user = user.toObject();
        if (err || !user) return next('missinguser');
        BandsModel.getBandsByUserId(req.user._id, (err, bands) => {
            if (err) return next(err)
            user.bands = bands;
            res.json(user);
        });
    });
}

function addNewUser(req,res,next) {
    UsersModel.addNewUser(req.body,(err,user) => {
        if (err) throw new Error(err);
        BandsModel.registerPendingMember(user,(err,res) => {
            req.body.user = user.toObject();
            next();
        });
    })
}

function authenticateUser(email, password, done) {
    UsersModel.findOne({email}, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!verifyPassword(user,password)) { return done(null, false); }
        return done(null, user.toObject());
    });
}

function verifyPassword(user,password) {
    return user.pass === password;
}

module.exports = {getUserData,authenticateUser,addNewUser}
