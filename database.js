var MongoClient = require('mongodb').MongoClient
	, assert = require('assert');

var url ='mongodb://localhost:27017/test';

MongoClient.connect(url,function(err,db){
	assert.equal(null,err);
	console.log("connected successfully to server");

    db.close();
});

