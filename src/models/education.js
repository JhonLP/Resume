var models = require('./models'),
	Schema = models.Schema;

var EducationSchema = Schema({
  año : 'number',
	titulo : 'string',
	url : 'string',
	lugar : 'string'
});

var Education = models.model('post', EducationSchema);

module.exports = Education;
