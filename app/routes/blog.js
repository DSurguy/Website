module.exports = function(app){
	//blog post ID (short url)
	app.get('/blog/[0-9]+/?', function (req, res){
		//redirect to the proper blog post (full title URL)
	});

	//blog post title
	app.get('/blog/([a-zA-Z0-9]-?)+/?', function (req, res){
		
	});
};