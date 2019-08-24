let models = require('../models');
let passwordHash = require('password-hash');
let error = require('../components/error');

module.exports.login = function (req, res) {

    if (req.method === 'GET') {
        res.render('auth/login');
    }

    if(req.method === 'POST') {

        let login = req.body.userName.trim();
        let password = req.body.password.trim();


        if (login.length < 2) {
            res.send(error.short_field("'login'"));
            res.end();
        }
        if (password < 4) {
            res.send(error.short_field("'password'"));
            res.end();
        }

        models.user.findOne({
            where: {name: login}
        }).then(user => {

            if (user === null) {
                res.send(error.user_not_found(login));
                res.end();
            }
            if ((passwordHash.verify(password, user.password)) === false) {
                res.send(error.user_not_found(login));
                res.end();
            }
            Promise.all([
                models.post.findAll({
                    include: [{
                        model: models.user,
                        attributes: ['id', 'name']
                    },
                        {
                            model: models.category,
                            attributes: ['url', 'title'],
                            as: 'category'
                        }]
                }),
                models.category.findAll({
                    attributes:['url', 'title'],
                    as: 'all_category'
                })
            ]).then(([post, all_category]) => {
                res.render('index', {
                    data: {post: post, all_category: all_category}
                })
            });
        });
    }
};

module.exports.registration = function (req, res) {

    if (req.method === 'GET') {
        res.render('auth/registration');
    }

    if(req.method === 'POST') {

        res.render('auth/registration');
    }
};
