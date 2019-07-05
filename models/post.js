var Sequelize = require("sequelize");
let db = require('../models/dbconnect');

let sequelize = db.sequelize;

// class Post extends Sequelize.Model {}
// Post.init({
//     id: Sequelize.INTEGER,
//     category_id: Sequelize.INTEGER,
//     title: Sequelize.STRING,
//     image: Sequelize.STRING,
//     created_at: Sequelize.INTEGER,
//     created_by: Sequelize.INTEGER,
//     text: Sequelize.TEXT,
//     url: Sequelize.STRING
// }, { sequelize, modelName: 'post' });


// sequelize.define('post', {
//     id: {
//         type: Sequelize.INTEGER,
//     },
//     category_id: {
//         type: Sequelize.INTEGER,
//     },
//     title: {
//         type: Sequelize.STRING,
//     },
//     image: {
//         type: Sequelize.STRING,
//     },
//     created_at: {
//         type: Sequelize.INTEGER,
//     },
//     created_by: {
//         type: Sequelize.INTEGER,
//     },
//     text: {
//         type: Sequelize.TEXT,
//     },
//     url: {
//         type: Sequelize.STRING,
//     },
// });

class Post extends Sequelize.Model {}
Post.init({
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
    },
    category_id: {
        type: Sequelize.INTEGER,
    },
    title: {
        type: Sequelize.STRING,
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: 'default.png'
    },
    created_at: {
        type: Sequelize.INTEGER,
    },
    created_by: {
        type: Sequelize.INTEGER,
    },
    text: {
        type: Sequelize.TEXT,
    },
    url: {
        type: Sequelize.STRING,
    },
}, {sequelize});




module.exports = Post;


