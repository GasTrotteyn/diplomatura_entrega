var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/destruir', function (req, res, next) {
	req.session.destroy();
	console.log('destruyendo');
	res.redirect('/login');
});

module.exports = router;
