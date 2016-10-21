
var express = require('express');
var _ = require('lodash');
var router = express.Router();
var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  cx: '002246757074746565668:m37433nc6lw',
  key: 'AIzaSyCET7mR5tt8IRFck489wxqrD3ButhVVjpQ'
});

/* GET home page. */
router.post('/search', function(req, res, next) {
    //get the query string
    var movies = req.body.movies;
  var books = req.body.books;
  var likes = req.body.likes;
  var likesArray = likes.split(',');
    var query = likesArray.shift();
    var config = {
      q: query,
      start: 5,
      num: 10 // Number of search results to return between 1 and 10, inclusive
    };
  console.log('$$$$');
  console.log(config);
    googleSearch.build(config, function(error, response) {
      console.log(response);
      if (typeof response.items !== 'undefined') {
        var items = response.items;
          console.log(items);
          res.render('search', { title: 'Express', content: items });
      }
      else {
        console.log('failed to load search', error)
        res.render('index', { title: 'Express'});
      }
    });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

module.exports = router;

