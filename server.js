var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var controller = require('./routes/controller.js');
var passport   = require('passport');
var LocalStrategy = require('passport-local');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(controller);




//MiddleWare


//app.use(function(req, res, next){
//   res.locals.currentUser    = req.user;
//    
//});


//========================================================================
//              Passport configuration
//========================================================================

app.use(require("express-session")({
       
       secret:          "edyogindustry",
       resave:           false,
       saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));


// serialize/deserialize

 passport.serializeUser(function(user, done) {
        done(null, user.id);
     
 });


    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });










//------------------------------------------------------------------------



//listening routes

app.listen(2000,function(){
  console.log('Magic happens on port 2000');
});
