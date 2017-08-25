var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var collaborater = require('../models/customer_detail');


//Landing page

router.get('/', function(req, res){
  res.render('../views/landing');
});

router.get('/connect',function(req,res){

    collaborater.find({}, function(err, collab)                 
  {
    res.render('../views/connect', {collab: collab});
    
   }                  
  );
    
    
});

router.get('/market',function(req,res){
  res.send('Trade with industries near you');
});

router.get('/login',function(req,res){
  res.send('Login page');
});

router.get('/register',function(req,res){
  res.send('Sign up here');
});

router.get('/contact',function(req,res){
  res.send('About us');
});

router.get('/profile',function(req,res){
  res.send('Your profile');
});



module.exports = router;
