var _ = require('underscore'),
	Resume = require('../models/resume'),
	Education = require('../models/education');

var resumeController = function (server, users) {
	console.log("ready");


	server.get('/resume', function(req,res) {
		Resume.find({})
		.exec(function(err, resumes){

			var resumesAsJson = _.map(resumes, function (resume) {
				return resume.toJSON();
			});
			Education.find({})
			.exec(function(err, educations){
				var educationsAsJson = _.map(educations, function (education) {
					return education.toJSON();
				});
			});
			res.render('resume',{
				resumes : resumes,
				educations : educations
			});
		});
	});
};
module.exports = resumeController;
