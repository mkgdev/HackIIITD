var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passpoortLocalMongoose  = require("passport-local-mongoose");

var UserSchema = new schema(

{
    local : {
  username : {type :String, required :true},
  password : {type :String, required :true}
    }
});

UserSchema.plugin(passpoortLocalMongoose)

var user = module.exports = mongoose.model('User', UserSchema);
