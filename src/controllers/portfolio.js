var _ = require('underscore'),
	Proyecto = require('../models/proyecto');

var portfolioController = function (server, users) {
	console.log("ready");

	server.get('/portfolio', function(req,res) {
		Proyecto.find({})
		.exec(function(err, proyectos){
			var proyectosAsJson = _.map(proyectos, function (proyecto) {
				return proyecto.toJSON();
			});

			res.render('portfolio',{
				proyectos : proyectos
			});
		});
	});
};
module.exports = portfolioController;
