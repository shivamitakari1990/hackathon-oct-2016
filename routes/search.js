
var express = require('express');
var _ = require('lodash');
var router = express.Router();
var url = require('url');
var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  cx: '002246757074746565668:m37433nc6lw',
  key: 'AIzaSyBPMF2dQBEj47rRmJ9FWN2Hh3C86A-nJcU'
});

/* GET home page. */
router.get('/search', function(req, res, next) {
    //get the query string
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log(query);
  var queryArray = [];
  var pass_query = '';
  // if (query.movies != '') {
  //   queryArray = queryArray = query.movies.split(',')
  // }
  //if (query.books != '') {
  //  queryArray = queryArray.concat(query.books.split(','));
  //}
  if (query.likes != '') {
    queryArray = queryArray.concat(query.likes.split(','));
  }
  query = queryArray[0];
  //  console.log(queryArray);
  //  var query  = queryArray.join('+');
  //console.log('DDDDDD');
console.log(query);
  console.log('DDDDDD');
  //var likesArray = likes.split(',');
    //var query = 'sports';//likesArray.shift();
    var config = {
      q: query,
      start: 5,
      num: 10 // Number of search results to return between 1 and 10, inclusive
    };
  console.log('$$$$');
  console.log(config);
    googleSearch.build(config, function(error, response) {
      if (typeof response.items !== 'undefined') {
        var items = response.items;
        var newItems = [];
        _.forEach(items, function(item) {
          var newItem = item;
          var images_arr = item.pagemap.cse_image;
          newItem.image_src = images_arr[0].src
          console.log(newItem.image_src);
          newItems.push(newItem);
        });
        //console.log(newItems);
          res.render('search', { title: 'Express', content: newItems });
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

