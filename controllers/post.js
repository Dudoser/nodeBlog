let express = require('express');
let app = express();

let url = require('url');

let model = require('../models/index');

app.use(express.json());

module.exports.index = function (req, res) {





        // model.post.findAll().then(post => {
        //     res.render('post/post', {
        //         post: JSON.parse(JSON.stringify(post, null))
        //     });
        // });

        model.post.findAll({
            include: [
                { model: model.category, as: "sss",  where: {id:1} }
            ]
        }).then(post => {
            res.render('post/post', {
                post: JSON.parse(JSON.stringify(post, null))
            });
        });


        // db.query(
        //     "SELECT post.id AS id, post.url AS url, post.title AS title, post.image AS image, post.created_at AS created_at, user.id AS user_id, user.name AS author, category.name AS category FROM post LEFT JOIN user ON user.id = post.created_by LEFT JOIN category ON category.id = post.category_id ORDER  BY id DESC",
        //     function (error, result,fields) {
        //         res.render('post/post', {
        //             post : JSON.parse(JSON.stringify(result))
        //         });
        //     }
        // );

};

module.exports.onePost = function (req, res) {

    let url_post = req.params.post_title;

    model.post.findAll({where: {url: url_post}}).then(post => {
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