var express = require('express');
var morgan = require('morgan');
var config = require('./config');
var url = 'mongodb://'+config.db.host +'/'+config.db.name;
var mongoose = require('mongoose');
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
	console.log('Connected correctly to server')
})

var newRouter = require('./routes/newRouter')
var redirect = require('./routes/redirect')

var app = express();
app.use(morgan('dev'));
var port = (process.env.PORT || 3000);




app.use('/new',newRouter);

app.use('/:redirect',redirect);

app.use('/',express.static(__dirname + '/public'));

app.listen(port,function(){
	console.log(`Listening on port ${port}`)
})
