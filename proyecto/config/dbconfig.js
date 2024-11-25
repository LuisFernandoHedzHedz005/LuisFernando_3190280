const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: '123456', // tu contraseña de MySQL
    database: 'node_crud',
    port: 3308
});

const sqlquery = (sql, params, callback) => {
    db.execute(sql, params, (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return callback(err);
        }
        return callback(null, results);
    });
};

module.exports = {
    pool,
    sqlquery
};