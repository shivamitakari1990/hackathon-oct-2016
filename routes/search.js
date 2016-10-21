
var express = require('express');
var _ = require('lodash');
var router = express.Router();
var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  key: 'AIzaSyCET7mR5tt8IRFck489wxqrD3ButhVVjpQ',
  cx: '002246757074746565668:zel-tatiewm'
});

/* GET home page. */
router.get('/search', function(req, res, next) {
    //get the query string
    var query = 'game';
    var config = {
      q: 'golf',
      start: 5,
      num: 10 // Number of search results to return between 1 and 10, inclusive
    };
    googleSearch.build(config, function(error, response) {
      if (typeof response.items !== 'undefined') {
        var items = response.items;
        console.log('got from googleeee');
          console.log(items);
          res.render('search', { title: 'Express', content: items });
      }
      else {
        console.log('failed to load search')
        res.render('index', { title: 'Express'});
      }
    });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

module.exports = router;

