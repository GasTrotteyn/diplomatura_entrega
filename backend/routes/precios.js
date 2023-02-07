var express = require('express');
var router = express.Router();
var preciosModel = require('./../models/preciosModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
	const precios = await preciosModel.getPrecios();
	res.render('precios', {
		nombre: req.session.nombre,
		logueado: req.session.nombre ? true : false,
		precios,
	});
});

router.get('/crearItem', async (req, res, next) => {
	res.render('crearItem', { layout: 'layout' });
});

router.post('/crearItem', async (req, res, next) => {
	try {
		if ((req.body.item != '', req.body.price != '', req.body.electric != '')) {
			await preciosModel.insertPrecio(req.body);
			res.redirect('/precios');
		} else {
			res.render('crearItem', {
				layout: 'layout',
				error: true,
				message: 'faltan datos para poder crear el nuevo item',
			});
		}
	} catch {
		res.render('crearItem', {
			layout: 'layout',
			error: true,
			message: 'hubo un error en la conexión y no pudimos crear el item',
		});
	}
});

router.get('/eliminarItem/:id', async (req, res, next) => {
	const id = parseInt(req.params.id);
	await preciosModel.deletePrecioById(id);
	res.redirect('/precios');
});

router.get('/modificarItem/:id', async (req, res, next) => {
	const id = req.params.id;
	const item = await preciosModel.getPrecioById(id);
	res.render('modificarItem', {
		layout: 'layout',
		item,
	});
});

router.post('/modificarItem', async (req, res, next) => {
	try {
		const obj = req.body;
		await preciosModel.updatePrecioById(obj);
		res.redirect('/precios');
	} catch (error) {
		console.log(error);
		res.render('modificarItem', {
			layout: 'layout',
			error: true,
			message: 'hubo un error y no se pudo modificar el item',
		});
	}
});

module.exports = router;
