//****************************************************************** */
//                  Manejo de la entidad employee con BD
//****************************************************************** */
//Implementando EXPRESS
const express = require('express');
const router = express.Router();
//Implementando MySQL
const mySqlConnex = require('../database');
//CONSULTAS
router.get('/', (req, res) => {
    mySqlConnex.query('SELECT * FROM employees', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//****************************************************************** */
//                  CREATE
//****************************************************************** */
//queremos insertar un dato mediante PROCEDIMIENTO ALMACENADO [employeeAddOrEdit]
router.post('/', (req, res) => {
    const { id, name, salary } = req.body;
    const query = `
    CALL employeeAddOrEdit(?,?,?);
    `
    mySqlConnex.query(query, [id, name, salary], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Employee Saved' });
            console.log('Employee Saved');
        } else {
            console.log('Something occurs while trying to save an Employee:',err);
        }
    });
});
//****************************************************************** */
//                  READ
//****************************************************************** */
router.get('/:id', (req, res) => {
    //req.params.id
    const { id } = req.params;
    console.log('La ID es:', id);
    //Realizando QUERY
    mySqlConnex.query('SELECT * FROM employees WHERE id= ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});
//****************************************************************** */
//                  UPDATE
//****************************************************************** */
//UTILIZAMOS EL MISMO PROCEDIMIENTO ALMACENADO PARA ACTUALIZAR UN OBJETO EN LA BD
router.put('/:id',(req, res)=>{
    const {name, salary} = req.body;
    const {id} = req.params;
    const query = 'CALL employeeAddOrEdit(?,?,?)';
    mySqlConnex.query(query, [id,name, salary], (err,rows,fields) =>{
        if (!err) {
            res.json({Status:'Employee Updated'});

        }else{
            console.log('Update Failed:',err);
        }
    });
});
//****************************************************************** */
//                  DELETE
//****************************************************************** */
router.delete('/:id', (req,res) =>{
    const {id} = req.params;
    mySqlConnex.query('DELETE FROM employees WHERE id = ?',[id], (err,rows,fields) => {
        if (!err) {
            res.json({Status: 'Employee Deleted'});
        }else{
            console.log('Deletion employee failed!:', err);
        }
    });
});
//creamos los URL donde el navegador envíe peticiones
module.exports = router;