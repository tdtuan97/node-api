'use strict';
const mysql = require('mysql');

const database = mysql.createConnection({
    host: process.env.DB_HOST || "192.168.88.220",
    user: process.env.DB_USER || "swat",
    password: process.env.DB_PASSWORD || "swat",
    database: process.env.DB_NAME || "jiw"
});

module.exports = database;