'use strict';

var mysql = require('mysql');

//uncomment below for local host
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1983',
  database: 'flashcards'
});

//uncomment below to push to heroku
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err) {
  if(err) {
    console.log('ERR', err);
  }
  else {
    console.log('connection success!');
  }
});

module.exports = connection;
