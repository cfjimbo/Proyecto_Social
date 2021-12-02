const express = require('express'); //atributo
const router = express.Router(); //objeto
const mysqlConnection  = require('../coneccionDB.js');


  router.get('/allpublications', (req, res) => {
    mysqlConnection.query('SELECT * FROM  publicacion, estudiante  WHERE publicacion.idEstudiante = estudiante.idcuenta', (err, rows, fields) => { //Consulta
      if(rows.length > 0) {
        var publicacion = [];
          for(var i = 0; i < rows.length; i++) {
              var a = {
                publicacion: {
                    infopublicacion : {
                        'idpublicacion' : rows[i].idpublicacion,
                        'titulo' : rows[i].titulo,
                        'descripcion' : rows[i].descripcion,
                        'img' : rows[i].img,
                    },estudiante : {
                        'idcuenta' : rows[i].idcuenta,
                        'nombre' : rows[i].nombre,
                        'apellido' : rows[i].apellido,
                        'usuario' : rows[i].usuario,
                        'email' : rows[i].email,
                        'token':  rows[i].token ? rows[i].token : '',
                        'modalidad':  rows[i].modalidad ? rows[i].modalidad : '',
                        'idCarrera':  rows[i].idCarrera ? rows[i].idCarrera : '',
                      }
                } 
              }    
                    publicacion.push(a); 
          }
          
        res.json(
            {
                status: '1', 
                message: 'Publicaciones encontradas',
                data : [    
                    publicacion
                ]
              }
            );
      } else {
        res.json(
          {
              status: '0', 
              message: 'Publicaciones no encontradas',
            }
          );
      }
    });  
  });

  module.exports = router;

