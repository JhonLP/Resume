var models = require('./models'),
	Schema = models.Schema;

var ProyectoSchema = Schema({
  titulo : 'string',
	descripcion : 'string',
	ano : 'string',
	categoria : 'number',
	url : 'string'
});

//categorias (si, me dio pereza hacer el modelo, solo se ocupa aqui <.<):
//JavaScript --> 1
//Python --> 2
//PHP --> 3
//WordPress --> 4
//Windows phone --> 5
//Static --> 6

var Proyecto = models.model('post', ProyectoSchema);

module.exports = Proyecto;
