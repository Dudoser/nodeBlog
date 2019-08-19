let express = require('express');
let app = express();
app.use(express.json());


module.exports.index = function (req, res) {

    let post = new Promise(function (resolve, reject) {
        db.query(
            "SELECT post.id AS id, post.url AS url, post.title AS title, post.image AS image, post.created_at AS created_at, user.id AS user_id, user.name AS author, category.name AS category FROM post LEFT JOIN user ON user.id = post.created_by LEFT JOIN category ON category.id = post.category_id",
            function (error, result, field) {
                resolve(result);
            }
        );
    });

    let category = new Promise(function (resolve, reject) {
        db.query(
            "SELECT * FROM category",
            function (error, result, field) {
                resolve(result);
            }
        );
    });

    Promise.all([post, category]).then(function (value) {
        res.render('index', {
            post: JSON.parse(JSON.stringify(value[0])),
            category: JSON.parse(JSON.stringify(value[1]))
        });
    })
};
