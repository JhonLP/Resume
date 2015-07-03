var _ = require('underscore');

var portfolioController = function (server, users) {
	console.log("ready");
	server.get('/portfolio', function (req,res) {
		res.render('portfolio');
	});
};
module.exports = portfolioController;
