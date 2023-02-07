var express = require('express');
var router = express.Router();
var preciosModel = require('../models/preciosModel');
var nodeMailer = require('nodemailer');

router.get('/precios', async (req, res, next) => {
	let items = await preciosModel.getPrecios();
	res.json(items);
});

var transporter = nodeMailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

router.post('/test', (req, res) => {
	res.status(201);
	res.json({ emailText: 'ruta test respondiendo' });
});

router.post('/contact', (req, res) => {
	if (req.body.form.name.value) {
		const emailText =
			'La persona: ' +
			req.body.form.name.value +
			' se contactó a través del formulario de contacto de la página web. Su mail es: ' +
			req.body.form.email.value +
			' y su teléfono es: ' +
			req.body.form.tel.value +
			'.\n' +
			'Dejó el siguiente comentario: ' +
			req.body.form.message.value;

		const mailOptions = {
			from: process.env.SMTP_USER,
			to: 'ggtrotteyn@gmail.com',
			subject: 'Mail from Patavans web-site form',
			text: emailText,
		};
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
		res.status(201);
		res.json({ emailText });
	} else {
		res.status(401);
	}
});

router.post('/preconversion', (req, res) => {
	if (req.body.form.firstName.value) {
		const emailText =
			'Un potencial cliente se comunicó con nosotros a través del formulario pre-conversion. los siguientes son sus datos: ' +
			'\n' +
			'Firs Name: ' +
			req.body.form.firstName.value +
			'\n' +
			'Last Name: ' +
			req.body.form.lastName.value +
			'\n' +
			'Email: ' +
			req.body.form.email.value +
			'\n' +
			'Tel: ' +
			req.body.form.tel.value +
			'\n' +
			'Have a Van?: ' +
			req.body.form.haveVan.value +
			'\n' +
			'Van Details: ' +
			req.body.form.vanDetails.value +
			'\n' +
			'Conversion Option Chosen: ' +
			req.body.form.convertionOption.value +
			'\n' +
			'Ideal date for start conversion: ' +
			req.body.form.idealDate.value +
			'\n' +
			'Primary use of the Van: ' +
			req.body.form.primaryUse.value +
			'\n' +
			'Aditional message: ' +
			req.body.form.message.value;

		const mailOptions = {
			from: process.env.SMTP_USER,
			to: 'ggtrotteyn@gmail.com',
			subject: 'Mail from Patavans web-site preconversion form',
			text: emailText,
		};
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
		res.status(201);
		res.json(req.body.form);
	} else {
		res.status(401);
	}
});

module.exports = router;

router.get('/', (req, res) => {
	res.send('hola mundo!');
});
