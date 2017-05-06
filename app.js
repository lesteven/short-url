var express = require('express');
var morgan = require('morgan');
var newRouter = require('./routes/newRouter')
//var say = require('./public/javascripts/link.js');
var app = express();
app.use(morgan('dev'));
var port = (process.env.PORT || 3000);

app.use('/',express.static(__dirname + '/public'));

app.use('/new',newRouter);



//app.get('https://123')
//id of url and redirect

app.listen(port,function(){
	console.log(`Listening on port ${port}`)
})
