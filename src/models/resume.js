var models = require('./models'),
	Schema = models.Schema;

var ResumeSchema = Schema({
	descripcion : 'string'
});

var Resume = models.model('post', ResumeSchema);

module.exports = Resume;
