var _ = require('underscore');

var contactController = function (server, users) {
	server.get('/', function (req,res) {
		res.render('contact');
	});

	server.get('/resume', function (req,res) {
		res.render('resume');
	});

	server.get('/portfolio', function (req,res) {
		res.render('portfolio');
	});
};
module.exports = contactController;
