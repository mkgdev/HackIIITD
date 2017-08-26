var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var passport     = require('passport');
var User         = require('../models/user.js');
var flash         = require("connect-flash");
var customerDetail = require('../models/customer_detail.js')
var middlware      = require('../middleware/index.js');


//Landing page

router.get('/', function(req, res){
  res.render('../views/landing');
});

//=================================
//        Connect Routes
//=====================================
router.get('/connect',function(req,res){
    

    customerDetail.find({}, function(err, customer)
  {
    console.log(customer);
    res.render('../views/connect', {customer: customer});

   }
  );


});

router.get('/connect/show/:id', function(req,res)
{          
     customerDetail.findById(req.params.id, function(err, customer)
    {
        console.log(customer);
         res.render('../views/connectShow', {user:customer});
         
         
     });
     
    
}          
);

//--------------------------------------------------

router.get('/market',middlware.isLoggedIn,function(req,res){
  res.send('Trade with industries near you');
});

//=================================
//    Auth routes
//=========================================

//show login form

router.get("/login", function(req, res){
    res.render("login");
});

// handling login logic
router.post("/login", passport.authenticate("local",
 {
  successRedirect: "/",
  failureRedirect: "/login"

}), function(req, res){


});

// Register routes

router.get("/register", function(req, res){

    res.render("register");

});

router.post("/register", function(req, res){


       var newUser = new User({username: req.body.username});


       User.register(newUser, req.body.password, function(err, user){
            if(err) {
              console.log(err);

              req.flash("error", err.message);
              return res.render("register");
            }

        passport.authenticate("local")(req, res, function(){

          res.redirect("/register/details");
        });


      });

});

router.get("/register/details",middlware.isLoggedIn,function(req,res){
  res.render('customer.ejs')
});

router.post("/register/details",middlware.isLoggedIn,function(req, res){
  var customer = req.body.customer; 
    console.log('hello',customer);
  customerDetail.create(customer,function(err,customer){
    if(err) throw err;
   
      
      customer.username = req.username;
      customer.save();
      console.log('customer',customer);
      req.flash("success" + req.username);
      res.redirect('/');
    
  });
});

router.get("/logout", function(req, res){
req.logout();
  req.flash("success", "Logged you out!!");
  res.redirect("/");

});

//----------------------------------------------------

router.get('/contact',function(req,res){
  res.send('About us');
});

router.get('/profile',function(req,res){
  res.send('Your profile');
});



module.exports = router;
