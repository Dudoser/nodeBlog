let db = require('../models/dbconnect');
var Sequelize = require("sequelize");

module.exports.user = function(sequelize, Sequelize) {

    var User = sequelize.define('post', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        name: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return User;
};



