let models = require('../models');

module.exports.index = function (req, res) {

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

};
