var express = require('express');

var newRouter = express.Router();


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
	var url = req.url.substring(1);
	var link = url.link("https://google.com");
	var shortUrl = 'hello'[url]
	generate();
	console.log(req.headers.host)
	res.json({
		"original-url": url,
		"short-url": 'https://123'
	})
})

function generate(){
	var num = String(Math.floor(Math.random()*10));
	console.log(num)
}

module.exports = newRouter;