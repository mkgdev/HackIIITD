var mongoose = require('mongoose');
var schema = mongoose.Schema;

var customerSchema = new schema({
  customerName : {type:String,required:true},
  companyName : {type:String,required:true},
  cluster : [{type:String}],
  email : String,
  contact : Number,
  //turnover : Number,
  address : String,
  location : String,
  industry : String,
  description : String
});

var customerDetail = module.exports = mongoose.model('Detail',customerSchema);
