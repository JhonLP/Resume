var _ = require('underscore');

var portfolioController = function (server, users) {
	server.get('/', function (req,res) {
		res.render('portfolio');
	});

	server.get('/resume', function (req,res) {
		res.render('resume');
	});
};
module.exports = portfolioController;
