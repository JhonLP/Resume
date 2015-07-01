var models = require('./models'),
	Schema = models.Schema;

var HomeSchema = Schema({
  titulo : 'string',
	descripcion : 'string'
});

var Home = models.model('post', HomeSchema);

module.exports = Home;
