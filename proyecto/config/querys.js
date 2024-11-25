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



module.exports = {
    agregarCelular,
    getCelulares
}