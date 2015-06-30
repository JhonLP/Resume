var _ = require('underscore');

var homeController = function (server, users) {
	server.get('/', function (req,res) {
		res.render('index');
	});

	server.get('/resume', function (req,res) {
		res.render('resume');
	});
};
module.exports = homeController;
