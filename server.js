var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var controller = require('./routes/controller.js');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(controller);






//listening routes

app.listen(2000,function(){
  console.log('Magic happens on port 3000');
});
