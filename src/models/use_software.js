var models = require('./models'),
	Schema = models.Schema;

var softwareSchema = Schema({
  nombre : 'string',
	url : 'string'
});

var Software = models.model('software', softwareSchema);

module.exports = Software;
