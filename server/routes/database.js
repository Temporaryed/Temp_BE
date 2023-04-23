var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'Project',
    password: 'testing00',
    database: 'swp',
    multipleStatements: true,
    charset: 'utf8mb4',
    connectionLimit: 30,
});

connection.getConnection((err) => {
    if (err) {
        console.log('Error:', err)
    }
    console.log('connecting');
});

module.exports = router;