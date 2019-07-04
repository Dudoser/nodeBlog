let express = require('express');
let app = express();

let url = require('url');

let db = require('../models/dbconnect');

app.use(express.json());

module.exports.index = function (req, res) {

    let url_category = url.parse(req.url, true).pathname;
    url_category = url_category.split('/')[2];

    if(url_category == '' || url_category == undefined) {

        db.query("" +
            "SELECT * FROM category",
            function (error, result,fields) {
                res.render('category', {
                    category : JSON.parse(JSON.stringify(result))
                });
            }
        );

    } else {
        db.query(
            "SELECT post.id AS id, post.title AS title, post.image AS image, post.created_at AS created_at, post.url AS url, user.id AS user_id, user.name AS userName  FROM category LEFT JOIN post ON post.category_id = category.id LEFT JOIN user ON user.id = post.created_by WHERE category.url = ?",
            [url_category],
            function(error, result, field) {
                if(result.length == 0) {
                    res.status(404).send('category with url <b>' + url_post + '</b> is not foound!');
                } else {
                    res.render('category_one', {
                        post : JSON.parse(JSON.stringify(result))
                    });
                }
            }
        );
    }
};