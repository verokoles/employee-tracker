const db = require("./config/connection.js");

// see the departmnet 
//function to open database
const checkDept = function(){
    //takes callnack function and wraps 
return new Promise(function (resolve, reject){
    db.query(
        //fiirst argument from DEPT table, in backticks//mysql documnetation without wrtiten our error calls
        'SELECT * FROM `department`;',
    , (error, res)=> {
        resolve(res);
        })
})

}
const checkRoles = function(){
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
const  = function(){
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
//exports object with all info inside the database
module.exports = {checkDept, checkRoles, };