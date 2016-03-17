'use strict';

var mysql = require('mysql');

//uncomment below for local host
var connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host: 'localhost',
  user: 'root',
  password: '1983',
  database: 'flashcards'
}); //the object portion is just for local host

connection.connect(function(err) {
  if(err) {
    console.log('ERR', err);
  }
  else {
    console.log('Connected to the database.');
  }
});

module.exports = connection;
