const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: '123456', // tu contraseña de MySQL
    database: 'celulares'
});

const sqlquery = async (sql, params) => {
    try {
        const [results] = await db.execute(sql, params);
        return results;
    } catch (err) {
        console.error('Error en la consulta:', err);
        throw err;
    }
};

module.exports = {
    db,
    sqlquery
};