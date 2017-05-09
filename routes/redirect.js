var express = require('express');
var redirect = express.Router();
var mongoose = require('mongoose');
var Links = require('../models/links')

redirect.route('/')

.get(function(req,res,next){
	var param = req.originalUrl.substring(1);
	console.log('get!!!!',param);
	Links.findOne({param:param},function(err,link){
		if(link===null){
			res.json({'error':'Parameter not found in database'})
		}
		else{
			console.log(link)
			res.redirect(link.url)
		}
	})

});

module.exports = redirect;