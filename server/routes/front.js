var express = require('express');
var router = express.Router();

var context = 'Front'
var paths = {
    defaultPath: '/',
}
var logMsg = {
    called: 'is called',
    callBack: 'is callback'
}

/* GET home page. */
router.get('/', async function (req, res, next) {


    var path = paths.defaultPath
    console.log(`\t${context}:\t${path} is ${logMsg.called}`)

    res.render('front', {title: 'sdzfzsdf', currentURL: path + context});

    var userInfo = [req.query.ID, req.query.PW]
    console.log('userInfo:', userInfo)

    console.log(`\t${context}:\t${path} is ${logMsg.callBack}`)
});

module.exports = router;
