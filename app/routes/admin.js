module.exports = function(app){
	app.get('/cookie', function (req, res){
		res.status(200);
		res.cookie('testCookie', 'mmmmm choco chip');
		res.send('Set Cookie!');
	});

	app.get('/admin', function (req, res){
		console.log(req.cookies);
		res.status(200).send('Got Cookies?');
	});
};