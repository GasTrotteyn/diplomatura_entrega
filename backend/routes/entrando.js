var express = require('express');
var router = express.Router();
const usuariosModel = require('../models/usuariosModel');

/* GET home page. */
router.post('/entrando', async (req, res, next) => {
	try {
		console.log(req.body);
		const name = req.body.nombreEnviado;
		const pass = req.body.password;

		const data = await usuariosModel.getUserByUsernameAndPass(name, pass);

		if (data != undefined) {
			req.session.nombre = req.body.nombreEnviado;
			res.redirect('/precios');
		} else {
			req.session.error = true;
			res.redirect('/login');
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
