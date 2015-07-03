var _ = require('underscore');

var homeController = function (server, users) {
	console.log("ready");
	server.get('/', function (req,res) {
		res.render('index');
	});
};
module.exports = homeController;
