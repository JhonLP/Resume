var express = require('express.io'),
	swig = require('swig'),
	_ = require('underscore');

var ex_session = require('express-session');


var server = express();
server.http().io();

var users = [];

//configuracion para renderizar vistas
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', './src/views');

//Cargar archivos staticos
server.use(express.static('./src/assets'));

// Agregamos post. cookies y sessiones
server.configure(function () {
	server.use(express.logger());
	server.use(express.cookieParser());
	server.use(express.bodyParser());

	server.use(express.session({
		secret : "lolcatz",
		cookie : { maxAge : 1200000}
	}));

});


//Controllers
var homeController = require('./src/controllers/home');
var resumeController = require('./src/controllers/resume');

homeController(server,users);

server.io.route('hello?', function (req) {
	req.io.emit('saludo',{ //se envia a un usuario
		message: 'serverReady'
	});
});

var port_number = process.env.PORT || 3000;
server.listen(port_number);
