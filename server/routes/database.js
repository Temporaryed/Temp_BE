var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var context = '\tDatabase:\t'
var paths = {
    defaultPath: '/',
}
var logMsg = {
    called: 'is called',
    callBack: 'is callback'
}

var connection = mysql.createPool({
    host: 'localhost',
    user: 'Project',
    port: '21006',
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

router.get(paths.defaultPath, (req, res) => {

    var path = paths.defaultPath
    console.log(context, path, logMsg.called);

    let sql =
        'select * from lecture;' +
        'select ID,replace(name,substring(name,2),\'**\') as name,bojid,Lecture_ID from student as s join learn as l on s.id=l.student_id order by name;';
    console.log('Lectures with masked names', sql);

    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log('error in', path, err);
            throw err;
        }
        console.log(context, path, logMsg.callBack);
        res.json({result: result});
    });
});

module.exports = router;