const express = require('express'); //atributo
const router = express.Router(); //objeto

const mysqlConnection  = require('../coneccionDB.js');

// GET all Employees
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM cuenta_user', (err, rows, fields) => { //Consulta
    if(!err) {
      res.json(rows); //Se obtiene los datos
    } else {
      console.log(err); //error arrojado por consola
    }
  });  
});

// GET An Employee
router.get('/usuario&contrasena', (req, res) => {
  const { usuario, contrasena } = req.body;
  console.log(req.body); //Pantalla principal devuelve usuario y contrasena
  mysqlConnection.query('SELECT usuario, contrasena FROM cuenta_user WHERE usuario = ? AND contrasena = ?', [usuario, contrasena], (err, rows, fields) => { // puede dar errores, filas o campos utilizados en la consulta
    if (!err) {
      res.json({status: usuario, contrasena});
    } else {
      console.log(err);
    }
  });
});

// DELETE
router.delete('/deletecuenta', (req, res) => { //Elimina una cuenta con id
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM cuenta_user WHERE usuario = ? AND contrasena = ?', [usuario, contrasena], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Cuenta Eliminada'});
    } else {
      console.log(err);
    }
  });
});

// INSERT
router.post('/registerform', (req, res) => { //Pantalla secundaria - Registro de formulario
  const {nombre, apellido, usuario, contrasena, email} = req.body;
  console.log(req.body);
  mysqlConnection.query('INSERT INTO cuenta_user (nombre, apellido, usuario, contrasena, email) VALUES (?, ?, ?, ?, ?)', 
  [nombre, apellido, usuario, contrasena, email], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Cuenta Ingresada'});
    } else {
      console.log(err);
    }
  });
});

router.put('/:updateform', (req, res) => { //Pantalla secundaria - Actualizar formulario
  const { nombre, apellido, usuario, contrasena, email} = req.body;
  const { id } = req.params;
  mysqlConnection.query('INSERT INTO cuenta_user (nombre, apellido, usuario, contrasena, email) VALUES (?, ?, ?, ?, ?)', 
  [nombre, apellido, usuario, contrasena, email], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Cuenta Actualizada'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
