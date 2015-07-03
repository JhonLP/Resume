var _ = require('underscore'),
	Resume = require('../models/resume'),
	Home = require('../models/home');

var postController = function (server, users) {
	console.log("post ready");

	server.get('/post', function(req,res) {
		Home.find({})
		.exec(function(err, homes){
			var homesAsJson = _.map(homes, function (home) {
				return home.toJSON();
			});

			res.render('post',{
				homes : homes
			});
		});
	});

	server.post('/post/create-post', function(req,res){

		var post = new Resume ({
			descripcion : req.body.descripcion
		});

		post.save(function(err){
			if (error) {
				res.send(500,err);
			}
			console.log('post guardado');
		});

		res.redirect('/post');

	});
};
module.exports = postController;
