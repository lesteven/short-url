var express = require('express');
var redirect = express.Router();

redirect.route('/')

.get(function(req,res,next){
	var url = req.originalUrl;
	console.log(url);
	res.redirect("https://google.com")
});

module.exports = redirect;