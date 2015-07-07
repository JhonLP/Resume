var _ = require('underscore'),
	async = require('async'),
	Host = require('../models/use_host'),
	Software = require('../models/use_software');

var useController = function (server, users) {
	console.log("Ready");

	server.get('/use', function (req,res) {
		var hosts = Host.find({});
		var softwares = Software.find({});

		var resultados = {
			host : hosts.exec.bind(hosts),
			software : softwares.exec.bind(softwares)
		};

		async.parallel(resultados, function (error,informacion) {
			if (error) {
				res.status(500).send(error);
				return;
			}
			res.render('use',informacion);
		});
	});
};
module.exports = useController;
