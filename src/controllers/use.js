var _ = require('underscore');

var useController = function (server, users) {
	server.get('/', function (req,res) {
		res.render('use');
	});

	server.get('/resume', function (req,res) {
		res.render('resume');
	});

	server.get('/portfolio', function (req,res) {
		res.render('portfolio');
	});
};
module.exports = useController;
