var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('login', {
		nombre: req.session.nombre,
		logueado: req.session.nombre ? true : false,
		url: req.originalUrl,
		cantidad: req.session.contador,
		error: req.session.error,
	});
});

module.exports = router;
