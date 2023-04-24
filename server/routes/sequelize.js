var express = require('express');
var router = express.Router();
var path = require('path');
var morgan = require('morgan');
var nunjucks = require('nunjucks');

var context = 'Sequelize'
var paths = {
    defaultPath: '/',
}
var logMsg = {
    called: 'is called',
    callBack: 'is callback'
}

const {sequelize} = require('../models');

sequelize.sync({force: false})
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

router.use(morgan('dev'));
router.use(express.static(path.join(__dirname, 'public')));
router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.get(paths.defaultPath, (req, res) => {

    var path = paths.defaultPath
    console.log(`\t${context}:\t${path} is ${logMsg.called}`)

    res.render('sequelize', {title: 'Sequelize', currentURL: path+context});

    console.log(`\t${context}:\t${path} is ${logMsg.callBack}`)

});

module.exports = router;


// router.set('port', process.env.PORT || 3001);
// router.set('view engine', 'pug');
// nunjucks.configure('views', {
//     express: router,
//     watch: true,
// });

// router.use((req, res, next) => {
//     const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
//     error.status = 404;
//     next(error);
// });
//
// router.use((err, req, res, next) => {
//     res.locals.message = err.message;
//     res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
//     res.status(err.status || 500);
//     res.render('error');
// });

// router.listen(router.get('port'), () => {
//     console.log(router.get('port'), '번 포트에서 대기 중');
// });
