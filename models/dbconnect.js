// require('dotenv').config();
var mysql = require('mysql');
var util = require('util');

var response = require('../models/response');

// var pool  = mysql.createPool({
//     host            : process.env.DB_HOST,
//     user            : process.env.DB_USERNAME,
//     password        : process.env.DB_PASSWORD,
//     database        : process.env.DB_DATABASE
// });

var pool  = mysql.createPool({
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'project'
});


// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }

    if (connection) connection.release()

    return
});
pool.global_outcome = [];
pool.global_game = [];
pool.hash_data = [];

pool.query = util.promisify(pool.query);
module.exports = pool;