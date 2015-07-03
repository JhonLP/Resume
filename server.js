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
var portfolioController = require('./src/controllers/portfolio');
var useController = require('./src/controllers/use');
var contactController = require('./src/controllers/contact');
var postController = require('./src/controllers/post');

homeController(server);
resumeController(server);
portfolioController(server);
useController(server);
contactController(server);
postController(server);

server.io.route('hello?', function (req) {
	req.io.emit('saludo',{ //se envia a un usuario
		message: 'serverReady'
	});
});

//rutas
server.get('/', function (req,res) {
	res.render('index');
});

server.get('/resume', function (req,res) {
	res.render('resume');
});

server.get('/portfolio', function (req,res) {
	res.render('portfolio');
});
server.get('/use', function (req,res) {
	res.render('use');
});
server.get('/contact', function (req,res) {
	res.render('contact');
});
server.get('/post', function (req,res) {
	res.render('post');
});

var port_number = process.env.PORT || 3000;
server.listen(port_number);
