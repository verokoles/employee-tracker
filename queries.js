const db = require("./config/connection.js");

// see the departmnet 
//function to open database
const viewDept = function() {
    //takes callnack function and wraps 
return new Promise(function (resolve, reject){
    db.query(
        //fiirst argument from DEPT table, in backticks//mysql documnetation without wrtiten our error calls
        'SELECT * FROM `department`;',
     (error, res)=> {
        resolve(res);
        })
})

}
const viewRoles = function(){
    //takes callnack function and wraps 
return new Promise(function (resolve, reject){
    db.query(
        //fiirst argument from DEPT table, in backticks//mysql documnetation without wrtiten our error calls
        'SELECT * FROM `role`;',
    , (error, res)=> {
        resolve(res);
        })
})
}
const viewEmployees = function(){
    //takes callnack function and wraps 
return new Promise(function (resolve, reject){
    db.query(
        //fiirst argument from DEPT table, in backticks//mysql documnetation without wrtiten our error calls
        'SELECT * FROM ``;',
    , (error, res)=> {
        resolve(res);
        })
})

}
const addDept = function(){
    //takes callnack function and wraps 
return new Promise(function (resolve, reject){
    db.query(
        //fiirst argument from DEPT table, in backticks//mysql documnetation without wrtiten our error calls
        'SELECT * FROM ``;',
    , (error, res)=> {
        resolve(res);
        })
})

}
const addRole = function(){
    //takes callnack function and wraps 
return new Promise(function (resolve, reject){
    db.query(
        'SELECT * FROM ``;',
    , (error, res)=> {
        resolve(res);
        })
})

}
const addEmployee = function(){
    //takes callnack function and wraps 
return new Promise(function (resolve, reject){
    db.query(
       
        'SELECT * FROM ``;',
    , (error, res)=> {
        resolve(res);
        })
})

}
const updateEmployee = function(){
    //takes callnack function and wraps 
return new Promise(function (resolve, reject){
    db.query(
        
        'SELECT * FROM ``;',
    , (error, res)=> {
        resolve(res);
        })
})

}

//exports object with all info inside the database
module.exports = {viewDept, viewRoles, viewEmployees, addDept, addRole, addEmployee, updateEmployee };