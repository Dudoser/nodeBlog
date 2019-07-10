let express = require('express');
let app = express();

let url = require('url');

let model = require('../models/index');

app.use(express.json());

module.exports.index = function (req, res) {

    let url_post = req.params.post_title;

    if(url_post == '' || url_post == undefined) {

        console.log("123");

        // db.query(
        //     "SELECT post.id AS id, post.url AS url, post.title AS title, post.image AS image, post.created_at AS created_at, user.id AS user_id, user.name AS author, category.name AS category FROM post LEFT JOIN user ON user.id = post.created_by LEFT JOIN category ON category.id = post.category_id ORDER  BY id DESC",
        //     function (error, result,fields) {
        //         res.render('post/post', {
        //             post : JSON.parse(JSON.stringify(result))
        //         });
        //     }
        // );

    } else {



        //
        // model.Post.create({
        //
        // }).then();


        model.Post.findAll().then(post => {
            console.log("All posts:", JSON.stringify(post, null, 4));
        });

        // Post.Post.findAll().then(
        //     post => {
        //         console.log(post);
        //         res.json(post)
        //     }
        // );

        // db.query(
        //     "SELECT * FROM post WHERE url=?",
        //     [url_post],
        //     function(error, result, field) {
        //         if(result.length == 0) {
        //             res.status(404).send('post with url <b>' + url_post + '</b> is not foound!');
        //         } else {
        //             res.render('post/post_one', {
        //                 post : JSON.parse(JSON.stringify(result[0]))
        //             });
        //         }
        //     }
        // );


    }
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