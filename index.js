const express = require ('express');
require('dotenv').config();

//Crear le servidor de express
const app = express();

//Lectura y parseo de body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

//Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
