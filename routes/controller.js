var express = require('express');
var router = express.Router();


//Landing page

router.get('/', function(req, res){
  res.render('../views/landing');
});

router.get('/connect',function(req,res){
  res.send('Connet with industries around you');
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
