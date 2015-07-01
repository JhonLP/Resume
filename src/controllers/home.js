var _ = require('underscore');

var homeController = function (server, users) {
	server.get('/', function (req,res) {
		res.render('index');
	});

	server.get('/resume', function (req,res) {
		res.render('resume');
	});

	server.get('/portfolio', function (req,res) {
		res.render('portfolio');
	});
	server.get('/use', function (req,res) {
		res.render('use');
	});
	server.get('/contact', function (req,res) {
		res.render('contact');
	});
};
module.exports = homeController;
