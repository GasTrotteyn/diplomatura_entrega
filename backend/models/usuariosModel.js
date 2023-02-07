var pool = require('./db');
var md5 = require('md5');

const getUserByUsernameAndPass = async (user, pass) => {
	try {
		const query = 'select * from usuarios where nombre = ? and password = ? limit 1';
		const rows = await pool.query(query, [user, md5(pass)]);
		console.log(rows[0]);
		return rows[0];
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getUserByUsernameAndPass };
