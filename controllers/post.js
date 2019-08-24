let models = require('../models');

module.exports.index = function (req, res) {
    models.post.findAll({
        include: [{
            model: models.category,
            attributes: ['url', 'title'],
            as: 'category'
        }, {
            model: models.user,
            attributes: ['id','name']
        }]
    }).then(post_all => {
        res.render('post/index', {
            post: post_all
        });
    });
};

module.exports.view = function (req, res) {
    models.post.findOne({
        include: [{
            model: models.category,
            attributes: ['title', 'url'],
            as: 'category'
        },
        {
            model: models.user,
            attributes: ['id', 'name']
        }]},
        {where: {url: req.params.url}}).then(post => {
        res.render('post/post_one', {
            post : post
        });
    });
};

module.exports.create = function (req, res) {

    if (req.method === 'GET') {

    }
    if (req.method === 'POST') {

    }

};