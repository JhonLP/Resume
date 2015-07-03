var models = require('./models'),
	Schema = models.Schema;

var resumeSchema = Schema({
	descripcion : 'string'
});

var Resume = models.model('resume', resumeSchema);

module.exports = Resume;
