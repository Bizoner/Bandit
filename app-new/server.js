const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const http = require ('http');
var mongoose = require('mongoose');
var cors = require('cors');

const app = express();

//const index = require('./routes/index');
const tasks = require('./routes/tasks');
const users = require('./controllers/user');
const bands = require('./controllers/band');

app.use(cors({
  origin: 'http://localhost:3003/',
  credential:true
}));

mongoose.connect('mongodb://user1:e.123456@ds255767.mlab.com:55767/bandit'); //db
const conn = mongoose.connection; //get default connection

//passport
var passport = require('passport');
var session = require('express-session');

app.use(session({
  name: 'myname.sid',
  resave: false,
  saveUninitialized: false,
  secret: 'secret',
  cookie:{
    maxAge: 36000000,
    httpOnly: false,
    secure: false
  }
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

//View Engine
//app.set('views' , path.join(__dirname,'views'));
app.set('views engine' , 'ejs');
app.engine('html' , require('ejs').renderFile);

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Set Static Folder
app.use(express.static(path.join('dist/app-new')));
app.use(express.static( path.join( __dirname )) );



//app.use('/' , index);
//app.use('/index' , index);
app.use('/api' , tasks);
app.use('/user' , users);
app.use('/band' , bands);

// Set Port
const port = process.env.PORT || '3000';

app.listen(port , function () {
  console.log('server started on port' + port );
})
