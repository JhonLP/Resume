var models = require('./models'),
	Schema = models.Schema;

var HostSchema = Schema({
  nombre : 'string',
	descripcion : 'string',
	url : 'string'
});

var Host = models.model('post', HostSchema);

module.exports = Host;
