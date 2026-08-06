const express = require ('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')
require('dotenv').config();

//Crear le servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors())

//Lectura y parseo de body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

//Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
