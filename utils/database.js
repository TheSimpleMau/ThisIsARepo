const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ThisIsARepoDB',
    password: ''
});

module.exports = pool.promise();