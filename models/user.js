var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passpoortLocalMongoose  = require("passport-local-mongoose");

var UserSchema = new schema(

{
   
  username : {type :String},
  password : {type :String}
    
});

UserSchema.plugin(passpoortLocalMongoose);

var user = module.exports = mongoose.model('User', UserSchema);
