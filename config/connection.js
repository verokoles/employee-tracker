const mysql = require("mysql2");
require("dotenv").config();
//database connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    console.log('You are now connected to the ELECTION database!')
);
db.connect();
module.exports = db