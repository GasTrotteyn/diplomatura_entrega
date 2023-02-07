var pool = require('./db');

const getPrecios = async () => {
	try {
		const query = 'select * from precios';
		const rows = await pool.query(query);
		console.log(rows);
		return rows;
	} catch (error) {
		console.log(error);
	}
};

const insertPrecio = async (obj) => {
	try {
		const query = 'insert into precios set ?';
		const rows = await pool.query(query, [obj]);
		return rows;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const deletePrecioById = async (id) => {
	const query = 'delete from precios where id= ?';
	const rows = await pool.query(query, [id]);
	return rows;
};

const getPrecioById = async (id) => {
	const query = 'select * from precios where id= ?';
	const rows = await pool.query(query, [id]);
	return rows[0];
};

const updatePrecioById = (obj) => {
	try {
		const query = 'update precios set ? where id = ?';
		const rows = pool.query(query, [obj, obj.id]);
		return rows;
	} catch (error) {
		console.log(error);
	}
};
module.exports = { getPrecios, insertPrecio, deletePrecioById, getPrecioById, updatePrecioById };
