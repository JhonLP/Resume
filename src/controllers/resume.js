var _ = require('underscore'),
	async = require("async"),
	Resume = require('../models/resume'),
	Education = require('../models/education');

var resumeController = function (server, users) {
	console.log("ready");

	server.get('/resume', function(req,res) {

		var resumenes = Resume.find({});
		var educacion = Education.find({});

		var resultados = {
			resumes : resumenes.exec.bind(resumenes),
			educations : educacion.exec.bind(educacion)
		};

		async.parallel(resultados, function (error,informacion) {
			if (error) {
				res.status(500).send(error);
				return;
			}
			res.render('resume',informacion);
		});
	});
};
module.exports = resumeController;
