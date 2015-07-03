var _ = require('underscore');

var useController = function (server, users) {
	console.log("Ready");

	server.get('/use', function (req,res) {
		res.render('use');
	});
};
module.exports = useController;
