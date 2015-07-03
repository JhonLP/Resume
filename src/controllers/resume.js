var _ = require('underscore');

var resumeController = function (server, users) {
	console.log("ready");
	server.get('/resume', function (req,res) {
		res.render('resume');
	});
};
module.exports = resumeController;
