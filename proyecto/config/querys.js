const pool = require('./dbconfig');

/*
async function agregarCelular(marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo) {
    await pool.db.execute(
        'INSERT INTO celulares (marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo]
    );
}
*/
const agregarCelular = async (marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo) => {
    try {
        await pool.db.execute(
            'INSERT INTO celulares (marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo]
        );
    } catch (err) {
        console.error('Error al agregar celular:', err);
    }
};


const getCelulares = (callback) => {
    pool.db.execute('SELECT * FROM celulares', (err, results) => {
        if (err) {
            console.error('Error al obtener los celulares:', err);
            callback([]);
            return;
        }
        callback(results);
    });
};

const getCelularesId = async (id) => {
    try {
        const results = await pool.sqlquery('SELECT * FROM celulares WHERE id = ?', [id]);
        return results;
    } catch (err) {
        console.error('Error al obtener los celulares:', err);
        throw err;
    }
};

const editarCelular =async (id, marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo) => {
    try {
        const sql = 'UPDATE celulares SET marca=?, modelo=?, color=?, precio=?, capacidad_almacenamiento=?, ram=?, sistema_operativo=? WHERE id=?';
        const params = [marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo, id];
        return await pool.sqlquery(sql, params);
    } catch (err) {
        console.error('Error al actualizar el celular:', err);
        throw err;
    }
};

module.exports = {
    agregarCelular,
    getCelulares,
    getCelularesId,
    editarCelular
}