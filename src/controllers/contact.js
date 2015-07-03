var _ = require('underscore');

var contactController = function (server, users) {
	console.log("ready");
	server.get('/contact', function (req,res) {
		res.render('contact');
	});

};
module.exports = contactController;
