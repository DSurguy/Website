module.exports = function(app){

	app.get('/?', function (req, res) {
		res.status(200).send('Homepage');
	});

	app.get('/[bB]log/?', function (req, res){
		if(req.originalUrl !== '/blog'){
			res.redirect('/blog')
		}
		else{
			res.status(200).send('Blog Page');
		}
	});

	//static page
	app.get('/([a-zA-Z0-9]-?)+/?', function (req, res){
		res.status(200).send(req.originalUrl);
	})

};