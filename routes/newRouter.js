var express = require('express');
var newRouter = express.Router();
var mongoose = require('mongoose');
var Links = require('../models/links')

newRouter.route('/')
.all(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/plain'});
	next();
})

.get(function(req,res,next){
	res.end(
	`Make sure to append a url after new!
	eg. new/https://example.com`)
});


newRouter.route('/:url(*)')

.get(function(req,res,next){
	var originUrl = req.url.substring(1);
	//generate then query database, if present
	//generate new until not in database
	var num = generate();
	var shortUrl = req.protocol +'://'+ req.headers.host 
					+'/'+ num;
	var check = checkParam(originUrl);
	if(check){
		var urlDoc = {
			"url": originUrl,
			"param": num
		}
		Links.collection.insert(urlDoc,function(err,link){
			if(err) throw err;
			console.log('link created',link);
			var id = link._id;
		})
		res.json({
			"original-url": originUrl,
			"short-url": shortUrl
		})
	}
	else{
		res.json({
			"error": "Wrong format! "+
			"Please include valid protocol."
		})
	}
})

function generate(){
	var num = '';
	for(var i = 0; i < 4;i++){
		var random = String(Math.floor(Math.random()*10));
		num +=random;
	}
	return num;
}
function checkParam(url){
	var re = /https?:\/\//;
	var re2 = /[.]/;
	var url = url;
	var test = re.test(url);
	var test2 = re2.test(url);
	if(test && test2){
		return true;
	}
	else{
		return false;
	}
}


module.exports = newRouter;