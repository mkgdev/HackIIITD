var mongoose = require('mongoose');
var schema = mongoose.schema;

var userSchema = new schema({
  username : {type :String, required :true},
  password : {type :String, required :true}
});

var user = module.exports = mongoose.model('User', userSchema);
