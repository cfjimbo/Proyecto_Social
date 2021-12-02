const express = require('express');
const app = express();

// Configuración de puerto, si un sistema operativo brinda un puerto que se ejecute en él pero sino en el port 3000
app.set('port', process.env.PORT || 3000);

// Si hay un json se hace accesible para las rutas
app.use(express.json());

// Rutas
app.use(require('./routes/users'));
app.use(require('./routes/publication'));

// Iniciando server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
