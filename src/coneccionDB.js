const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '127.0.0.1',
 // port: 3307,
  user: 'root',
  password: '',
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