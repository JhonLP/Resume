var models = require('./models'),
	Schema = models.Schema;

var hostSchema = Schema({
  nombre : 'string',
	descripcion : 'string',
	url : 'string'
});

var Host = models.model('host', hostSchema);

module.exports = Host;
