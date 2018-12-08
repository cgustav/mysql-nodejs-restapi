const express = require('express');
const app = express();

//****************************************************************** */
//                  Settings
//****************************************************************** */
//se puede definir [puerto], [entorno de desarrollo], [nombre de app], etc del servidor
// Establecemos un puerto para el servidor utilizando Express
//app.set('port',3000);
//Para los servicios en la nube:
app.set('port', process.env.PORT || 3000);
//****************************************************************** */
//                  Middlewares
//****************************************************************** */
//Funciones que se ejecutan antes de procesar un request desde el cliente
//utlizando body parser para objetos con notaciòn JSON, el modulo express será capaz de manejar estos objetos
app.use(express.json());

//****************************************************************** */
//                  Routes
//****************************************************************** */
//Manejo de las URL establecida para envio y recepcion de datos [HTTP]
//
app.use(require('./routes/employees'));
//****************************************************************** */
//                  Manejando respuestas de servidor
//****************************************************************** */
app.listen(app.get('port'), () => {
    console.log('Server on port 3000', app.get('port'));
});