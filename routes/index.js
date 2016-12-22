var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/req', function(req, res, next) {
    res.render('req', { title: 'Express' });
});

module.exports = router;
