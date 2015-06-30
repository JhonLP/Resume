var _ = require('underscore');

var resumeController = function (server, users) {
	server.get('/', function (req,res) {
		res.render('resume');
	});
};
module.exports = resumeController;
