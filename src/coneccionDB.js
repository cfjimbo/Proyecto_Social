const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '1234',
  database: 'social_login',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('DB conectada');
  }
});

module.exports = mysqlConnection; //exporta modulo mysql