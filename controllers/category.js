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

module.exports.one_category = function (req, res) {
    models.category.findOne({
        include: [{
            model: models.post,
            include : [{
                model: models.user
            }]
        }]
    },{where: {url: req.param.category_name}}
    ).then(post => {
        res.render('category/category_one', {
            post: post
        });

    });
}