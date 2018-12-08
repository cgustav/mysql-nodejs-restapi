//****************************************************************** */
//                  Conexión a la Base de Datos
//****************************************************************** */
//OBJETO DE CONEXION UTILZANDO MODULO MYSQL
const mysql = require('mysql');

//creando Objeto de Conexión con el servidor BD
const mySqlConnex = mysql.createConnection({
host: 'localhost',
user: 'usercharcha',
password: 'passwird',
database: 'company'
});
//Conectando a BD y manejando excepciones
mySqlConnex.connect(function (err){
    if (err) {
        console.log('Something went wrong!',err);
        return;
    }else{
        console.log('DB is connected!');
    }
});
//Exportando

module.exports = mySqlConnex;

/*
PARA ALGUN PROBLEMA DE AUTH_MODE DEL MySQL
USE mysql;

ALTER USER 'useradminus'@'localminus' IDENTIFIED WITH mysql_native_password BY 'passwird';

CREATE USER 'usercharcha' IDENTIFIED WITH mysql_native_password BY 'passwird';
*/