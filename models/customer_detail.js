var mongoose = require('mongoose');
var schema = mongoose.Schema;

var customerSchema = new schema({
  username : String,
  customerName : String,
  companyName : String,
  cluster : [{type:String}],
  email : String,
  contact : Number,
  //turnover : Number,
  address : String,
  location : String,
  industry : String,
  description : String
});
 module.exports = mongoose.model('customerDetail',customerSchema);
