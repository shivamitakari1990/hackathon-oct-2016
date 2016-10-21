var express = require('express');
var _ = require('lodash');
var router = express.Router();

var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  key: 'AIzaSyCET7mR5tt8IRFck489wxqrD3ButhVVjpQ',
  cx: '002246757074746565668:zel-tatiewm'
});

/* GET home page. */
router.get('/', function(req, res, next) {
     res.render('index', { title: 'Express'});
});

module.exports = router;
