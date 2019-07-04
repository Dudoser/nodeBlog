let express = require('express');
let app = express();

let url = require('url');

let db = require('../models/dbconnect');

app.use(express.json());

module.exports.index = function (req, res) {

    let url_post = url.parse(req.url, true).pathname;
    url_post = url_post.split('/')[2];

    if(url_post == '' || url_post == undefined) {

        db.query("" +
            "SELECT post.id AS id, post.url AS url, post.title AS title, post.image AS image, post.created_at AS created_at, user.id AS user_id, user.name AS author, category.name AS category FROM post LEFT JOIN user ON user.id = post.created_by LEFT JOIN category ON category.id = post.category_id ORDER  BY id DESC",
            function (error, result,fields) {
                res.render('post', {
                    post : JSON.parse(JSON.stringify(result))
                });
            }
        );

    } else {
        db.query(
            "SELECT * FROM post WHERE url=?",
            [url_post],
            function(error, result, field) {
                if(result.length == 0) {
                    res.status(404).send('post with url <b>' + url_post + '</b> is not foound!');
                } else {
                    res.render('post_one', {
                        post : JSON.parse(JSON.stringify(result[0]))
                    });
                }
            }
        );
    }
};