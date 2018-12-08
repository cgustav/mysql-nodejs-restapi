/*CREANDO BASE DE DATOS 
para proyecto BACKEND/Aprendizaje/mysql-nodejs-restapi */

CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employees(
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);


DESCRIBE employees;