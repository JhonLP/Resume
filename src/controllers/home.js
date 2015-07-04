var _ = require('underscore'),
	Home = require('../models/home');

var homeController = function (server, users) {
	console.log("ready");

	server.get('/', function(req,res) {
		Home.find({})
		.exec(function(err, homes){
			var homesAsJson = _.map(homes, function (home) {
				return home.toJSON();
			});

			res.render('index',{
				homes : homes
			});
		});
	});
};
module.exports = homeController;
