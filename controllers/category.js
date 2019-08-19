let express = require('express');
let app = express();

let url = require('url');

let models = require('../models');


app.use(express.json());

module.exports.index = function (req, res) {

    models.category.findAll().then(all_category => {
        res.render('category/index', {
            category: all_category
        });

    });

};