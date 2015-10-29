var express = require('express');
var app = express();
require('./routes')(app);

var server = app.listen(3000, function () {
	var host = server.address().address,
		port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});