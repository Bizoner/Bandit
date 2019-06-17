// app.js
const path = require('path');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var cors = require("cors");
const passport = require('passport');
app.use(cors({credentials: true, origin: 'http://localhost:4200'}))

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

var studio = require('./routes/studio'); // Imports routes for the products
var band = require('./routes/band');
var user = require('./routes/user');
var index = require('./routes/index');

// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://user1:e.123456@ds255767.mlab.com:55767/bandit';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/studio', studio);
app.use('/users',user);
app.use('/bands',band);
app.use('/index',index);

app.get('/songstudio',(req,res) => {
    app.use(express.static(path.join(__dirname, 'client-studio')));
    res.sendfile(path.join(__dirname, 'client-studio/index.html'))
});

app.get('/',(req,res)=> {
    app.use(express.static(path.join(__dirname, 'client-dash')));
    res.sendfile(path.join(__dirname, 'client-dash/index.html'))
});

app.get('/bands/:id',(req,res)=> {
    app.use(express.static(path.join(__dirname, 'client-dash')));
    res.sendfile(path.join(__dirname, 'client-dash/index.html'))
});

app.listen(process.env.PORT || 3003, () => {
    console.log('Server is up and running on port numner 3003');
});
