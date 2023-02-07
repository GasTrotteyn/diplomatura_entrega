var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var cors = require('cors');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var entrandoRouter = require('./routes/entrando');
var destruirRouter = require('./routes/destruir');
var preciosRouter = require('./routes/precios');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
	session({
		secret: 'aeHp58d34DiSguw7MyzKEBetwUjLrucL',
		resave: false,
		saveUninitialized: true,
	}),
);

const secure = (req, res, next) => {
	if (req.session.nombre) {
		console.log('pasó el meddleware');
		next();
	} else {
		res.redirect('/login');
	}
};

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.post('/entrando', entrandoRouter);
app.get('/destruir', destruirRouter);
app.use('/precios', secure, preciosRouter);
app.use('/api', cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
