var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linksSchema = new Schema({
	param:{type:String, required:true},
	url:{type:String,required:true}
},{
	timestamps:true
})

var Links = mongoose.model('Link',linksSchema);

module.exports = Links;