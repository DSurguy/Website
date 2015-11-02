var express = require('express'),
	cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

require('./routes')(app);

var server = app.listen(3000, '192.168.50.110', function () {
	var host = server.address().address,
		port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});