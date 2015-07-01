var models = require('./models'),
	Schema = models.Schema;

var SoftwareSchema = Schema({
  nombre : 'string',
	url : 'string'
});

var Software = models.model('post', SoftwareSchema);

module.exports = Software;
