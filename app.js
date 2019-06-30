let express = require('express');
let app = express();

let url = require('url');
let bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressHandlebars = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');


let formidable = require('formidable');
/**
 * public - имя папки где хранится статика
 */
app.use(express.static('public'));
/**
 *  задаем шаблонизатор
 */
app.set('view engine', 'pug');
/**
 * Подключаем mysql модуль
 */
let mysql = require('mysql');
let http = require('http');
/**
 * настраиваем модуль
 */
app.use(express.json());

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project'
});

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


app.listen(3000, function () {
    console.log('node express work on 3000');
});

app.get('/', function (req, res) {
    let catDescription = new Promise(function (resolve, reject) {
        con.query(
            "SELECT post.id AS id, post.title AS title, post.image AS image, post.created_at AS created_at, user.id AS user_id, user.name AS author, category.name AS categogy FROM post LEFT JOIN user ON user.id = post.created_by LEFT JOIN category ON category.id = post.category_id",
            function (error, result, field) {
                if (error) return reject(error);
                resolve(result);
            }
        );
    });
    let category = new Promise(function(resolve, reject){
        con.query(
          "SELECT * FROM category",
          function(error, result, field){
              resolve(result);
          }
        );
    });
    Promise.all([catDescription, category]).then(function (value) {
        console.log(value[1]);
        res.render('index', {
            goods: JSON.parse(JSON.stringify(value[0])),
            category: JSON.parse(JSON.stringify(value[1])),
        });
    });
});

app.get('/post/', function(req, res){
    let url_r = url.parse(req.url, true).query;
    let post_id = url_r.id;
    console.log(url_r.id);

    if(post_id == undefined) {
        res.status(404).send("Not found.");
    } else {
        con.query(
            "SELECT * FROM post WHERE id=?",
            [post_id],
            function(error, result, field) {
                res.render('post', {
                    post : JSON.parse(JSON.stringify(result[0]))
                });
            }
        );
    }
});

app.get('/category/', function (req, res) {

    let url_r = url.parse(req.url, true).query;
    let category_id = url_r.id;

    if (category_id == undefined) {

        con.query(
            "SELECT * FROM category",
            function(error, result, field) {
                res.render('category', {
                   category : JSON.parse(JSON.stringify(result))
                });
            }
        );

    } else {
        con.query(
            "SELECT post.id AS id, post.title AS title, post.image AS image, post.created_at AS created_at, user.id AS user_id, user.name AS name, category.name AS categoryName  FROM category LEFT JOIN post ON post.category_id = category.id LEFT JOIN user ON user.id = post.created_at WHERE category.id = ?",
            [category_id],
            function (error, result,field) {
                res.render('category', {
                   categoryPost : JSON.parse(JSON.stringify(result))
                });
            }
        );
    }

});

app.get('/user/', function (req, res) {

    let url_r = url.parse(req.url, true).query;
    let user_id = url_r.id;

    if(user_id == undefined) {
        res.status(404).send("Not found.");
    } else {
        let user = new Promise(function (resolve, reject) {
            con.query(
                "SELECT * FROM user WHERE user.id = ?",
                [user_id],
                function (error, result, field) {
                    if(error) return reject(error);
                    resolve(result);
                }
            );
        });
        let userPost = new Promise(function (resolve, reject) {

            con.query(
                "SELECT * FROM post LEFT JOIN user ON user.id = post.created_by WHERE post.created_by = ?",
                [user_id],
                function(error, result, field) {
                    if(error) return reject(error);
                    resolve(result);
                }
            );

        });
        Promise.all([user, userPost]).then(function (value) {
            res.render('user', {
                user : JSON.parse(JSON.stringify(value[0])),
                userPost : JSON.parse(JSON.stringify(value[1]))
            });
        });
    }

});

app.all('/create/', function (req, res) {


    if (req.body.length == undefined) {
        res.render('create_post');
    } else {
        let title = req.body.title;
        let text = req.body.text
    }
});