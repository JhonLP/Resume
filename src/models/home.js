var models = require('./models'),
	Schema = models.Schema;

var homeSchema = Schema({
  titulo : 'string',
	descripcion : 'string'
});

var Home = models.model('home', homeSchema);

module.exports = Home;
