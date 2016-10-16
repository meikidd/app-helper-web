const db = require('mysql-promise')();

db.configure({
  "host": "localhost",
  "user": "root",
  "password": "@2qwertyuiop",
  "database": "app-helper"
});

module.exports = db;
