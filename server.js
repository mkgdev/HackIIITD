var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var flash         = require("connect-flash");
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var controller = require('./routes/controller.js');
var passport   = require('passport');
var LocalStrategy = require('passport-local');
var User          = require('./models/user.js');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(controller);

//--------------------------------------------------------------------------------------------------------------------------
var DBURL = process.env.url;

if(!DBURL)
    {
        DBURL= "mongodb://localhost/edyog" ;
    }

 mongoose.connect(DBURL);

//-------------------------------------





//MiddleWare


//app.use(function(req, res, next){
//   res.locals.currentUser    = req.user;
//   res.locals.error          = req.flash("error");
//   res.locals.success        = req.flash("success");
//   next();
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
