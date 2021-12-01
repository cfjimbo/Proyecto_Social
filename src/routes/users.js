const express = require('express'); //atributo
const router = express.Router(); //objeto

const mysqlConnection  = require('../coneccionDB.js');
router.get('/', (req, res) => {
  res.end('API On server');
});

router.get('/allstudents', (req, res) => {
  mysqlConnection.query('SELECT * FROM cuenta_user', (err, rows, fields) => { //Consulta
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.get('/login_app', (req, res) => {
  try {
    let user = req.query.user;
    let pass = req.query.pass;
    console.log(user);
    console.log(pass);
    mysqlConnection.query('SELECT * FROM cuenta_user WHERE usuario = ? AND contrasena = ?', [user, pass], (err, rows, fields) => { // puede dar errores, filas o campos utilizados en la consulta
      console.log(rows, "Rows");
      if(rows.length > 0){
        res.json(
          {status: '1', 
          message: 'Usuario encontrado',
          data : {
            'idcuenta' : rows[0].idcuenta,
            'nombre' : rows[0].nombre,
            'apellido' : rows[0].apellido,
            'usuario' : rows[0].usuario,
            'email' : rows[0].email,
            'token':  rows[0].token ? rows[0].token : '',
          }
        
        }
          );
      }else{
        res.json({status: '0', message: 'Usuario o contraseña incorrectos'});
      }
    });
  } catch (error) {
    console.log(error);
  }
});


router.delete('/deletecuenta', (req, res) => {
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
router.post('/registrar_usuario_app', (req, res) => { //Pantalla secundaria - Registro de formulario
  const {nombre, apellido, usuario, contrasena, email} = req.body;
  console.log(req.body);
  mysqlConnection.query('INSERT INTO cuenta_user (nombre, apellido, usuario, contrasena, email) VALUES (?, ?, ?, ?, ?)', 
  [nombre, apellido, usuario, contrasena, email], (err, rows, fields) => {
    if(!err) {
      res.json({status: '1', msg: 'Registrado correctamente'});
    } else {
      res.json({status: '0', msg: 'Error, no se ha podido registrar en la Base de datos'});
      console.log(err);
    }
  });
});

router.put('/updateform', (req, res) => { //Pantalla secundaria - Actualizar formulario
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
