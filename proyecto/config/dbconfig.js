const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: '123456', // tu contraseña de MySQL
    database: 'celulares'
});

const sqlquery = async (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, results) => {
            if (err) {
                console.error('Error en la consulta:', err);
                return reject(err);
            }
            resolve(results);
        });
    });
};

module.exports = {
    db,
    sqlquery
};