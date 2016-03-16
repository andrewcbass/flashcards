var express = require('express');
var router = express.Router();

var db = require('../config/db');

router.get('/', function(req, res, next) {
  db.query('select * from quotes', function(err, quotes) {
    if(err) return res.status(400).send(err);

    res.send(quotes);
  });
});

router.post('/', function(req, res) {
  db.query('insert into quotes set ?', req.body, function(err, result) {
    if(err) return res.status(400).send(err);

    res.send(result);
  });
});

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var quote = req.body.quote;
  var person = req.body.person;
  var category = req.body.category;


  db.query('update quotes set quote=?, person=?, category=? where id=?',
          [quote, person, category, id], function(err, result) {

    if(err) return res.status(400).send(err);

    res.send(result);
  });
});

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  console.log('ID', id);
  db.query('delete from quotes where id=?', id, function(err, result) {
    if(err) return res.status(400).send(err);

    res.send(result);
  });
});

module.exports = router;

//
//
//
//
//
//
