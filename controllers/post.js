let express = require('express');
let app = express();

let url = require('url');

let models = require('../models');

module.exports.index = function (req, res) {
    models.post.findAll().then(post_all => {
        res.render('post/index', {
            post: post_all
        });
    });
};

module.exports.onePost = function (req, res) {

    let url_post = req.params.post_title;

    models.post.findAll({where: {url: url_post}}).then(post => {
        res.render('post/post_one', {
            post : JSON.parse(JSON.stringify(post, null))
        });
    });
};

// module.exports.update = function (req, res) {
//
//     db.query(
//         "SELECT * FROM post  WHERE id = ?",
//         [req.params.post_id],
//         function (error, result, field) {
//             if(result.length == 0) {
//                 res.status(404).send('post with id <b>' + req.params.post_id + '</b> is not foound!');
//             } else {
//                 res.render('post/update', {
//                     post : JSON.parse(JSON.stringify(result[0]))
//                 });
//             }
//         }
//     );
//
// };
//
// module.exports.create = function (req, res) {
//
//     res.render('post/create_post');
//
// };