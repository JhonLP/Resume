var models = require('./models'),
	Schema = models.Schema;

var educationSchema = Schema({
  ano : 'number',
	titulo : 'string',
	url : 'string',
	lugar : 'string'
});

var Education = models.model('edu', educationSchema);

module.exports = Education;
