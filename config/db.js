'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1983',
  database: 'flashcards'
});

connection.connect(function(err) {
  if(err) {
    console.log('ERR', err);
  }
  else {
    console.log('connection success!');
  }
});

module.exports = connection;
