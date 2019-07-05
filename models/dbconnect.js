// require('dotenv').config();
// var mysql = require('mysql');
var Sequelize = require("sequelize");


var sequelize = new Sequelize("project", "root", "root", {
    dialect: "mysql",
    host: "localhost",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;