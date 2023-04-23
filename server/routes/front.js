var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('front', {title: 'sdzfzsdf'});
    var userInfo = [req.query.ID, req.query.PW]
    console.log(userInfo)
});

module.exports = router;
